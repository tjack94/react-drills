import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Products from './products';
import Details from './details';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={Products} />
					<Route path="/details/:id" component={Details} />
				</Switch>
			</div>
		);
	}
}

export default App;
