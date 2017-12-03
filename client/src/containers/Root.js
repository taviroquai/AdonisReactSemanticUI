import React, { Component } from 'react';
import App from './App.js';
import { HashRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

/**
 * Use React Router and Cookies
 */
class Root extends Component {
    render() {
        return (
            <Router>
                <CookiesProvider>
                    <App />
                </CookiesProvider>
            </Router>
        );
    }
}

export default Root;
