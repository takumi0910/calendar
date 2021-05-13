import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            pass: ''
        };
    }

    registerMail(e) {
        let adress = e.target.value
        this.setState({ mail: adress })
    }

    registerPass(e) {
        let password = e.target.value
        this.setState({ pass: password })
    }

    handleLogin = () => {
        if (this.state.mail === 'example@gmail.com' && this.state.pass === 'password') {
            localStorage.setItem("login", "true");
            this.props.history.push("/");
        }
    }

    render() {
        console.log(this.state.mail)
        return (
            <div className='login-form'>
                <div className='main'>
                    <div className='mail'>メールアドレス</div>
                    <input type="text" placeholder='example@gmail.com' onChange={this.registerMail.bind(this)} />
                    <div className='pass'>パスワード</div>
                    <input type="text" placeholder='password' onChange={this.registerPass.bind(this)} />
                    <button className='login-btn' onClick={() => this.handleLogin()}>ログイン</button>
                    <Link to='/signup'>
                        <button>新規登録(未完成)</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);