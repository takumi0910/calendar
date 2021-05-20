import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../Firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, CssBaseline } from '@material-ui/core';

class Login extends React.Component {
    handleOnLogin(values) {
        //サインイン（ログイン）処理
        firebase.auth().signInWithEmailAndPassword(values.email, values.password)
            .then(() => {
                //正常終了時
                localStorage.setItem("login", true);
                this.props.history.push("/");

            })
            .catch(() => {
                //エラー発生時
                alert('error');
            });
    }

    render() {
        return (
            <CssBaseline>
                <div className='login-form'>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => this.handleOnLogin(values)}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email().required(),
                            password: Yup.string().required(),
                        })}
                    >
                        {
                            ({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        name="email"
                                        id="email-form"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        invalid={touched.email && errors.email ? true : false}
                                    />
                                    <TextField label="password"
                                        type="password"
                                        name="password"
                                        id="password-form"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        invalid={touched.password && errors.password ? true : false}
                                    />
                                    <div>
                                        <Button variant="contained" color="primary" type='submit'>ログイン</Button>
                                    </div>
                                </form>
                            )
                        }
                    </Formik>
                    <p className='signup'>初めてご利用される方はこちら</p>
                    <Link to='/signup'>
                        <a className='signup-link'>新規登録</a>
                    </Link>
                </div>
            </CssBaseline>
        );
    }
}

export default withRouter(Login);