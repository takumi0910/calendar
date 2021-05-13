import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Nav extends React.Component {

    handleLogout = () => {
        localStorage.setItem("login", "false");
        this.props.history.push("/");
    }

    render() {
        return (
            <nav className='top-menu'>
                <ul className='top-menu-content'>
                    <li><NavLink exact to="/">Calendar</NavLink></li>
                    <li><span onClick={() => this.handleLogout()}>Logout</span></li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(Nav);