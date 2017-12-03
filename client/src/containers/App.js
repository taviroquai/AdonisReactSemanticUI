import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import AppComponent from '../components/App';
import { profileGetUser } from '../actions.js';

class App extends Component {
    componentWillMount() {
        if (this.props.cookies.get('auth_token')) {
            profileGetUser(this.props.cookies.get('auth_token'));
        }
    }
    render() {
        return (
            <AppComponent {...this.props} />
        );
    }
}

export default withCookies(App);
