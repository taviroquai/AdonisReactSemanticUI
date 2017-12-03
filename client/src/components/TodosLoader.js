import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

class TodosLoader extends Component {
    render() {
        return (
            <div className="ui main text container" style={{height: '440px'}}>
                <h1 className="ui header">TodoMVC</h1>

                <Dimmer active>
                    <Loader />
                </Dimmer>

            </div>
        );
    }
}

export default TodosLoader;
