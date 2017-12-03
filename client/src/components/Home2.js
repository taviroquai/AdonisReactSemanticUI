import React, { Component } from 'react';
import imgRachel from '../assets/images/rachel.png';
import { Button } from 'semantic-ui-react';
import { Header, Image, Modal } from 'semantic-ui-react';

class Home2 extends Component {
    render() {
        return (
            <div className="ui main text container">
                <h1 className="ui header">Modal Example</h1>
                <Modal trigger={<Button>Show Modal</Button>}>
                    <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' src={imgRachel} />
                        <Modal.Description>
                            <Header>Default Profile Image</Header>
                            <p>We've found the following gravatar image associated with your e-mail address.</p>
                            <p>Is it okay to use this photo?</p>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

export default Home2;
