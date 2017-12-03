import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import imgLogo from '../assets/images/logo.png';

class Footer extends Component {
    render() {
        return (
            <div className="ui inverted vertical footer segment">
                <div className="ui center aligned container">
                    <div className="ui stackable inverted divided grid">
                        <div className="three wide column">
                            <h4 className="ui inverted header">Group 1</h4>
                            <div className="ui inverted link list">
                                <a role="button" className="item">Link One</a>
                                <a role="button" className="item">Link Two</a>
                                <a role="button" className="item">Link Three</a>
                                <a role="button" className="item">Link Four</a>
                                <Link to="/home" role="button" className="item">Link Five</Link>
                                <Link to="/home2" role="button" className="item">Link Six</Link>
                            </div>
                        </div>
                        <div className="three wide column">
                            <h4 className="ui inverted header">Group 2</h4>
                            <div className="ui inverted link list">
                                <a role="button" className="item">Link One</a>
                                <a role="button" className="item">Link Two</a>
                                <a role="button" className="item">Link Three</a>
                                <a role="button" className="item">Link Four</a>
                            </div>
                        </div>
                        <div className="three wide column">
                            <h4 className="ui inverted header">Group 3</h4>
                            <div className="ui inverted link list">
                                <a role="button" className="item">Link One</a>
                                <a role="button" className="item">Link Two</a>
                                <a role="button" className="item">Link Three</a>
                                <a role="button" className="item">Link Four</a>
                            </div>
                        </div>
                        <div className="seven wide column">
                            <h4 className="ui inverted header">Footer Header</h4>
                            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                        </div>
                    </div>
                    <div className="ui inverted section divider"></div>
                    <img alt="Logo" src={imgLogo} className="ui centered mini image" />
                    <div className="ui horizontal inverted small divided link list">
                        <a className="item" role="button">Site Map</a>
                        <a className="item" role="button">Contact Us</a>
                        <a className="item" role="button">Terms and Conditions</a>
                        <a className="item" role="button">Privacy Policy</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
