import React, { Component } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Container>
					<Switch>
						//<Route path="/" component={Home} exact={true} />
						<Route path="/contact" component={Contact} exact={true} />
					</Switch>
				</Container>
			</div>
			);
	}
}

export default App;
