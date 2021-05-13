import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            pass: '',
            value: '0',
            OpenModal: false
        };
    }

    registerMail(e) {
        let address = e.target.value
        this.setState({ mail: address })
    }

    registerPass(e) {
        let password = e.target.value
        this.setState({ pass: password })
    }

    plus() {
        this.setState({ value: Number(this.state.value) + 1 })
        this.setState({ OpenModal: true })
    }

    // stateが変更されたら実行
    componentDidUpdate() {
        // ローカルストレージにステートの情報を保存
        localStorage.setItem(this.state.value, JSON.stringify(this.state));
    }

    changePath(){
        this.props.history.push("/login");
    }

    render() {
        console.log(this.state.value)
        let finishSignUp;
        if (this.state.OpenModal === true) {
            finishSignUp = (
                <div className='finish'>
                    <p>登録完了</p>
                    <button onClick={this.changePath()}>ログイン画面へ</button>
                </div>
            )
        }

        return (
            <div className='signup-form'>
                <div className='main'>
                    <div className='mail'>メールアドレス</div>
                    <input type="text" placeholder='example@gmail.com' onChange={this.registerMail.bind(this)} />
                    <div className='pass'>パスワード</div>
                    <input type="text" placeholder='password' onChange={this.registerPass.bind(this)} />
                    <button className='login-btn' onClick={this.plus.bind(this)}>登録</button>
                </div>
                {finishSignUp}
            </div>
        );
    }
}

export default withRouter(SignUp);