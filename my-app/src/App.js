import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './HelloWorld'; //Nosso primeiro component React

class App extends Component {
  render() {
    return <HelloWorld/>;
  }
}

export default App;
