import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../Firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container } from '@material-ui/core';
import Shot from './Google';
import Google from './Google';

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
            <div className='back'>
                <Container className='login-form'>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => this.handleOnLogin(values)}
                        validationSchema={Yup.object().shape({
                            email: Yup.string('メールアドレスを正しい形式で入力してください').email('メールアドレスを正しい形式で入力してください').required('メールアドレスは記入必須です'),
                            password: Yup.string('パスワードは6文字以上で設定してください').required('パスワードは入力必須です'),
                        })}
                    >
                        {
                            ({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        size='medium'
                                        label="Email"
                                        type="email"
                                        name="email"
                                        className='email'
                                        id="email-form"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        invalid={touched.email && errors.email ? true : false}
                                    />
                                    <div>{errors.email}</div>
                                    <TextField label="password"
                                        type="password"
                                        name="password"
                                        id="password-form"
                                        className='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        invalid={touched.password && errors.password ? true : false}
                                    />
                                    <div>{errors.password}</div>
                                    <Button className='btn' variant="contained" color='primary' type='submit'>ログイン</Button>
                                </form>
                            )
                        }
                    </Formik>
                    <Google />
                    <div className='signup-wrap'>
                        <p className='signup'>初めてご利用される方はこちら<Link to='/signup'><a className='signup-link'>新規登録</a></Link></p>

                    </div>
                </Container>
            </div>
        );
    }
}

export default withRouter(Login);