import React , {Component} from 'react';
import './App.css';

class Nav extends Component {

	state={
		currentNav:'nav'
	};

	// componentWillReciveProps() {
	// 	if(this.props.navBar) {
	// 		this.setState({
	// 			currentNav: 'navOpen'
	// 		})
	// 	}
	// }


	render() {
		// {this.props.navBar===true && this.setState({currentNav:'navOpen'})}
		console.log(this.props.navBar);
		return(
			<nav className={this.props.navBar? 'navOpen' : 'nav'}>
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