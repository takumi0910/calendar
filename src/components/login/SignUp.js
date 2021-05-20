import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../Firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';


class SignUp extends React.Component {

    handleOnSubmit(values) {
        //新規登録処理
        firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
            .then(() => {
                //Homeに移動
                this.props.history.push("/");
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
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => this.handleOnSubmit(values)}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('email必須だよ').required(),
                    password: Yup.string().required(),
                })}
            >
                {
                    ({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email ? <div>{errors.email}</div> : null}
                            <input
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                invalid={touched.password && errors.password ? <div>{errors.password}</div> : null}
                            />
                            <div style={{ textAlign: 'center' }}>
                                <button type='submit'>
                                    新規登録
                                    </button>
                            </div>
                        </form>
                    )
                }
            </Formik>
        );
    }
}

export default withRouter(SignUp);