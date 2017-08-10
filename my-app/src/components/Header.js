import React from 'react';
import logo from '../imagens/logo.svg'

var frutas = ['Banana', 'Maçã', 'Uva'];

var teste = "Teste Variavel";

export default class Header extends React.Component {

	render() {
		return(
		<div>
			<h3>{teste}</h3>

		<div>
			<ul>
			{
				frutas.map(function (fruta){
					return <li>{fruta}</li>
				})
			}
			</ul>
		</div>
		<h1>Teste!!!!</h1>
		<img src={logo} className="App-logo" alt="logo" />
		<a href="https://www.google.com.br/" target="__blank">link pagina</a>
		</div>
		);
	}
} 

//https://css-tricks.com/learning-react-router/ | Rotas