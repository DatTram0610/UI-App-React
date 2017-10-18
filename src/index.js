
import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import NavBar from './components/navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
