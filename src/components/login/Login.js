import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../Firebase';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            pass: '',
        };
    }

    handleOnLogin() {
        //spinner表示開始
        //サインイン（ログイン）処理
        firebase.auth().signInWithEmailAndPassword(this.state.mail, this.state.pass)
            .then(() => {
                //正常終了時
                console.log('success')
                localStorage.setItem("login", true);
                this.props.history.push("/");

            })
            .catch(() => {
                //エラー発生時
                alert('error');
            });

    }


    registerMail(e) {
        let address = e.target.value
        this.setState({ mail: address })
    }

    registerPass(e) {
        let password = e.target.value
        this.setState({ pass: password })
    }

    handleLogin = () => {
        const UserAccount = this.state.userInformation
        let user = this.state.userNumber
        let address = this.state.mail
        let password = this.state.pass
        let judge = 0

        for (let i = 0; i < user; i++) {
            if (UserAccount[i].mail === address && UserAccount[i].pass === password) {
                localStorage.setItem("login", true);
                this.props.history.push("/");
            } else if (UserAccount[i].mail === address) {
                alert('パスワードに誤りがあります')
                break
            } else if (UserAccount[i].pass === password) {
                alert('メールアドレスに誤りがあります')
                break
            } else {
                judge = judge + 1
            }
        }

        if (judge === user) {
            alert('アカウント情報が存在しません。入力内容をお確かめください')
        }

    }

    componentWillMount() {
        if (localStorage.UserData) {
            const saveDate = JSON.parse(localStorage.UserData);
            this.setState({
                userInformation: saveDate.userInformation,
                userNumber: saveDate.userNumber
            })
        }


    }

    render() {
        return (
            <div className='login-form'>
                <div className='main'>
                    <div className='mail'>メールアドレス</div>
                    <input type="email" required placeholder='example@gmail.com' onChange={this.registerMail.bind(this)} />
                    <div className='pass'>パスワード</div>
                    <input type="text" required placeholder='password' onChange={this.registerPass.bind(this)} />
                    <button className='login-btn' onClick={() => this.handleOnLogin()}>ログイン</button>
                    <div>
                        <p className='signup'>初めてご利用される方はこちら</p>
                        <Link to='/signup'>
                            <a className='signup-link'>新規登録</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);