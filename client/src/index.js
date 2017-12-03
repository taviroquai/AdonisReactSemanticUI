import React from 'react';
import ReactDOM from 'react-dom';
import Store from 'react-observable-store';
import './semantic/dist/semantic.min.css';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

// Fetch client configuration
fetch('/config.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(res => res.json())
.then((config) => {

    // Init global state
    Store.init(config, true);

    // Start app
    ReactDOM.render(<Root />, document.getElementById('root'));
    registerServiceWorker();

});
