import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleLogin = () => {
        localStorage.setItem("login", "true");
        this.props.history.push("/");
    }

    render() {
        console.log(this.state.text)
        return (
            <div className='login-form'>
                <div className='main'>
                <div className='mail'>メールアドレス</div>
                <input type="text" />
                <div className='pass'>パスワード</div>
                <input type="text"/>
                <button className='login-btn' onClick={() => this.handleLogin()}>ログイン</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);