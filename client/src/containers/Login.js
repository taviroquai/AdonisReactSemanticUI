import React, { Component } from 'react';
import { withStore } from 'react-observable-store';
import { withCookies } from 'react-cookie';
import { Redirect, withRouter } from 'react-router-dom';
import LoginComponent from '../components/Login';
import {
    loginEmail,
    loginPwd,
    loginSubmit
} from '../actions.js';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(e, { name, value }) {
        switch(name) {
            case 'email': loginEmail(value); break;
            case 'pwd': loginPwd(value); break;
            default: ;
        }
    }

    submit(e) {
        e.preventDefault();
        loginSubmit((auth_token) => {
            this.props.cookies.set('auth_token', auth_token);
            this.props.history.push('/');
        });
    }

    render() {
        if (this.props.cookies.get('auth_token')) {
            return <Redirect to="/user" />
        }
        return (
            <LoginComponent {...this.props}
                handleChange={this.handleChange}
                submit={this.submit}
            />
        );
    }
}

export default withStore('login', withRouter(withCookies(Login)));
