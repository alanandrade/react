import React, { Component } from 'react';
import './App.css';

import HelloWorld from './HelloWorld'; //Nosso primeiro component React
import Header from './components/Header';//Component desntro de subpastas

class App extends Component {
  render() {
    return <div>
    <HelloWorld/>
    <Header/>
    </div>
  }
}

export default App;