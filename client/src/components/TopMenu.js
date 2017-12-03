import React, { Component } from 'react';
import imgLogo from '../assets/images/logo.png';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class TopMenu extends Component {
    render() {
        return (
            <Menu attached='top' inverted>
                <a role="button" className="header item" href="/">
                    <img alt="" className="logo" src={imgLogo} />
                    <span className="mobile hidden">Brand</span>
                </a>
                <Menu.Item name='home' as={Link} to="/">
                    Home
                </Menu.Item>
                <Menu.Item name='home2' as={Link} to="/home2">
                    Home2
                </Menu.Item>
                <Menu.Item name='todos' as={Link} to="/todos">
                    TodosMVC
                </Menu.Item>
                <Dropdown item icon='ellipsis vertical' simple>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Icon name='dropdown' />
                            <span className='text'>New</span>
                            <Dropdown.Menu>
                                <Dropdown.Item>Document</Dropdown.Item>
                                <Dropdown.Item>Image</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>Open</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Menu position='right'>
                    <div className='ui right aligned category search item'>
                        <div className='ui transparent icon input' style={{maxWidth: '100px'}}>
                            <input className='prompt' type='text' placeholder='Search...' />
                            <i className='search link icon' />
                        </div>
                        <div className='results' />
                    </div>
                    { !this.props.user && (
                        <Menu.Item name='Login' as={Link} to="/login">
                            Login
                        </Menu.Item>
                    ) }
                    { this.props.user && (
                        <Menu.Item name='User' as={Link} to="/user">
                            { this.props.user.email }
                        </Menu.Item>
                    ) }
                    { this.props.user && (
                        <Menu.Item name='Logout' as={Link} to="/logout">
                            Logout
                        </Menu.Item>
                    ) }
                </Menu.Menu>
            </Menu>
        );
    }
}

export default TopMenu;
