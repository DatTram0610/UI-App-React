import React from 'react';
import NavBar from './navbar.js';
import Header from './common/header.js';


class App extends React.Component() {
    render() {
        return (
            <div>
                {<Header />}
                {this.props.children}
                {<NavBar />}
            </div>
        );
    }
}   

export default App;