import React , {Component} from 'react';
import './App.css';

class Nav extends Component {
	render() {
		return(
			<nav className="navbar">
				<div>
					<h2>ShenZhen Locations</h2>
					<div id="searchBox">
						<input 
							type="text" 
							placeholder="Station location"/>
						<button className="filter">Filter</button>
					</div>
				</div>
			</nav>
		)
	}
}

export default Nav;