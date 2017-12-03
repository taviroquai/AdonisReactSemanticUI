import React, { Component } from 'react';
import imgMediaParagraph from '../assets/images/media-paragraph.png';
import imgParagraph from '../assets/images/paragraph.png';

class Home extends Component {
    render() {
        return (
            <div className="ui main text container">
                <h1 className="ui header">Semantic UI Fixed Template</h1>
                <p>This is a basic fixed menu template using fixed size containers.</p>
                <p>A text container is used for the main container, which is useful for single column layouts</p>
                <img alt="" className="wireframe" src={imgMediaParagraph} style={{ maxWidth: '100%'}} />
                <img alt="" className="wireframe" src={imgParagraph} style={{ maxWidth: '100%'}} />
            </div>
        );
    }
}

export default Home;
