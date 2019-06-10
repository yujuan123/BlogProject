import React, {Component} from 'react';
import Nav from '../containers/Nav';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return <div className="main">
            <Nav />
            <div className="body-content">
                {this.props.children}
            </div>
            <Footer />
        </div>
    }
}