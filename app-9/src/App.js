import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import Signup from './signup';
import Details from './details';

class App extends Component {
	render() {
		return (
			<div className="App">
					<Link to="/">home</Link>
					<Link to="/signup">Sign Up</Link>
					<Link to="/details">Details </Link>
					<Switch>
						<Route path exact="/" component={Home} />
						<Route path="/signup" component={Signup} />
						<Route path="/details" component={Details} />
					</Switch>
				
			</div>
		);
	}
}

export default App;
