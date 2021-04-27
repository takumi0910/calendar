import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

    handleLogin = () => {
        localStorage.setItem("login", "true");
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h3>ログイン</h3>
                ID: <input type="text" /><br />
                PW: <input type="text" /><br />
                <button onClick={() => this.handleLogin()}>ログイン</button>
            </div>
        );
    }
}

export default withRouter(Login);