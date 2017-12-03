import React, { Component } from 'react';
import { withStore } from 'react-observable-store';
import TopMenuComponent from '../components/TopMenu';

class TopMenu extends Component {
    render() {
        return (
            <TopMenuComponent {...this.props} />
        );
    }
}

export default withStore('profile', TopMenu);
