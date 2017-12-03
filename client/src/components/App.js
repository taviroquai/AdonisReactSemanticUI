import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TopMenu from '../containers/TopMenu';
import Home from './Home';
import Home2 from './Home2';
import Footer from './Footer';
import Todos from '../containers/Todos';
import Logout from '../containers/Logout';
import Login from '../containers/Login';
import User from '../containers/User';
import '../assets/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <TopMenu />

                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/home2" component={Home2} />
                <Route path="/todos" component={Todos} />
                <Route path="/login" component={Login} />
                <Route path="/user" component={User} />
                <Route path="/logout" component={Logout} />

                <Footer />

            </div>
        );
    }
}

export default App;
