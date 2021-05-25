import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../../Firebase'

class FacebookAuth extends Component {
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
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(() => {
            })
            .catch(() => {
                //エラー発生時
                alert('error')
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
                    <button onClick={this.logout}>Facebook Logout</button>
                ) : (
                    <button onClick={this.login}>Facebook Login</button>
                )}
            </div>
        )
    }
}

export default withRouter(FacebookAuth)