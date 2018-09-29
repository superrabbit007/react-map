import React, {Component} from 'react';
import './App.css';

class Menu extends  Component {
	render() {
		return(
			<div className="menu">
				<button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
				  <span className="icon-bar"></span>
				  <span className="icon-bar"></span>
				  <span className="icon-bar"></span>
				</button>
			</div>
		)
	}
};

export default Menu;
