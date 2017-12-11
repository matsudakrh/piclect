import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './initializers';
import Routing from './routing';

class App extends Component {
  render() {
    return (
      <div>
        <Routing />
      </div>
    );
  }
}

ReactDOM.render(
  <App />
, document.getElementById('react'));