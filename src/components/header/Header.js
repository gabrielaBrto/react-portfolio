import React from 'react';
import { Navbar, NavItem, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const Header = () =>(
	<Row>
		<Navbar className="grey darken-4">
			<li><NavLink to='/'>Inicio</NavLink></li>
			<li><NavLink to='contact'>Contato</NavLink></li>
		</Navbar>
	</Row>
);

export default Header;
