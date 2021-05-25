import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../Firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container } from '@material-ui/core';


class SignUp extends React.Component {

    handleOnSubmit(values) {
        //新規登録処理
        firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
            .then(() => {
                //Homeに移動
                this.props.history.push("/login");
            })
            .catch(() => {
                console.log('error')
            });
    }

    render() {
        let finishSignUp;
        finishSignUp = (
            <div className='finish'>
                <h2>登録完了</h2>
                <Link to='/login'>
                    <button>ログイン画面へ</button>
                </Link>
            </div>
        )

        return (
            <div className='back'>
                <Container className='login-form'>
                    <h2 className='signup-title'>新規会員登録</h2>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => this.handleOnSubmit(values)}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email('メールアドレスを正しい形式で入力してください').required('メールアドレスは記入必須です'),
                            password: Yup.string().min(8, 'パスワードは8文字以上に設定してください').required('パスワードは入力必須です'),
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
                                    <p className='mail-error'>{errors.email}</p>
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
                                    <p className='pass-error'>{errors.password}</p>
                                    <Button className='btn' variant="contained" color='primary' type='submit'>登録</Button>
                                </form>
                            )
                        }
                    </Formik>
                </Container>
            </div>
        );
    }
}

export default withRouter(SignUp);