import React, { Component } from 'react'
import firebase from '../../Firebase'

class Google extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }
  
  logout() {
    firebase.auth().signOut()
  }

  render() {
    return (
      <div className="Auth">
        {this.state.user ? (
          <button onClick={this.logout}>Google Logout</button>
        ) : (
          <button onClick={this.login}>Google Login</button>
        )}
      </div>
    )
  }
}

export default Google