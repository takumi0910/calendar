import React from 'react';
import { Redirect } from 'react-router-dom';

class Auth extends React.Component {
    render() {

        let loginStatus = localStorage.getItem("login");

        if (loginStatus === "true") {
            return this.props.children;
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default Auth;