import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../../Firebase';
import LoadingOverlay from 'react-loading-overlay';


class Auth extends React.Component {
    state = {
        logincheck: false,
        login: false
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    loginCheck: true,
                    login: true,
                });

            } else {
                this.setState({
                    loginCheck: true,
                    login: false,
                });
            }
        })
    }

    render() {
        if (!this.state.loginCheck) {
            return (
                <LoadingOverlay
                    active={true}
                    spinner
                    text='Loading...'
                >
                    <div className='loading'></div>
                </ LoadingOverlay>
            );
        }

        if (this.state.login) {
            return this.props.children;
        } else {
            return <Redirect to="login" />
        }

    }
}
export default Auth;