import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {
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

    // stateが変更されたら実行
    componentDidUpdate() {
        // ローカルストレージにステートの情報を保存
        localStorage.setItem('signup', JSON.stringify([this.state]));
    }

    render() {
        console.log(this.state.mail)
        return (
            <div className='signup-form'>
                <div className='main'>
                    <div className='mail'>メールアドレス</div>
                    <input type="text" placeholder='example@gmail.com' onChange={this.registerMail.bind(this)}/>
                    <div className='pass'>パスワード</div>
                    <input type="text" placeholder='password' onChange={this.registerPass.bind(this)} />
                    <button className='login-btn'>登録</button>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUp);