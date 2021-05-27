import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../../Firebase'

class GoogleAuth extends Component {
    state = {
        user: null
    }

    //ログイン中ユーザーの取得
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user })
        })
    }

    login() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then(() => {
            //正常終了時
            this.props.GoogleLogin()
        })
        .catch((error) => {
            //エラー発生時
            console.log(error)
        });
    }

    logout() {
        firebase.auth().signOut()
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    ID: {this.state.user && this.state.user.uid}
                </p>

                {this.state.user ? (
                    <button onClick={this.logout}>Google Logout</button>
                ) : (
                    <button onClick={this.login}>Google Login</button>
                )}
            </div>
        )
    }
}

export default withRouter(GoogleAuth)