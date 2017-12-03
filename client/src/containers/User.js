import React, { Component } from 'react';
import { withStore } from 'react-observable-store';
import { Redirect } from 'react-router-dom';
import UserComponent from '../components/User';

class User extends Component {

    render() {
        if (!this.props.user.email) {
            return <Redirect to="/login" />
        }
        return (
            <UserComponent {...this.props} />
        )
    }
}

export default withStore('profile', User);
