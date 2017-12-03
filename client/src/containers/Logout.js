import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import { logout } from '../actions.js';

class Logout extends Component {
    componentWillMount() {
        this.props.cookies.remove('auth_token');
        logout();
    }
    render() {
        return <Redirect to="/" />
    }
}

export default withCookies(Logout);
