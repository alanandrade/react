import React from 'react';
import logo from '../imagens/logo.svg'

export default class Header extends React.Component {
	render() {
		return(
		<div> 
		<h1>Teste!!!!</h1>
		<img src={logo} className="App-logo" alt="logo" />
		</div>
		);
	}
} 