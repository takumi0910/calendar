import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../Firebase';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            pass: '',
            userNumber: 0,
            OpenModal: false,
            userInformation: {}
        };
    }

    handleOnSubmit(){
        //新規登録処理
        firebase.auth().createUserWithEmailAndPassword(this.state.mail, this.state.pass)
            .then(() => {
                //Homeに移動
                this.props.history.push("/");
            })
            .catch(() => {
                console.log('error')
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

    plus() {
        let userNumber = this.state.userNumber;
        let information = this.state.userInformation

        if (this.state.mail && this.state.pass) {
            information[userNumber] =
            {
                mail: this.state.mail,
                pass: this.state.pass
            }

            this.setState({ userNumber: userNumber + 1 })
            this.setState({ userInformation: information })
            this.setState({ OpenModal: true })
        }else{
            alert('メールアドレスまたはパスワードが空欄です。ご入力ください')
        }
    }


    // もし前回のデータがあったら、ローカルストレージの値を取得し、更新する
    componentWillMount() {
        if (localStorage.UserData) {
            const saveDate = JSON.parse(localStorage.UserData);
            this.setState({
                userInformation: saveDate.userInformation,
                userNumber: saveDate.userNumber
            })
        }
    }

    // stateが変更されたら実行
    componentDidUpdate() {
        localStorage.setItem('UserData', JSON.stringify(this.state));
    }

    render() {
        console.log(this.state.mail)
        let finishSignUp;
        if (this.state.OpenModal === true) {
            finishSignUp = (
                <div className='finish'>
                    <h2>登録完了</h2>
                    <Link to='/login'>
                        <button>ログイン画面へ</button>
                    </Link>
                </div>
            )
        }

        return (
            <div className='signup-form'>
                <h2 className='signup-title'>新規登録</h2>
                <div className='main'>
                    <div className='mail'>メールアドレス</div>
                    <input type="email" required placeholder='example@gmail.com' onChange={this.registerMail.bind(this)} />
                    <div className='pass'>パスワード</div>
                    <input type="text" required placeholder='password' onChange={this.registerPass.bind(this)} />
                    <button className='login-btn' type='submit' onClick={() => this.handleOnSubmit()}>登録</button>
                </div>
                {finishSignUp}
            </div>
        );
    }
}

export default withRouter(SignUp);