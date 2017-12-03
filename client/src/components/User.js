import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props.user)}</pre>
            </div>
        )
    }
}

export default User;
