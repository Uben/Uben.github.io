import React from 'react';
import { Link } from 'gatsby';

import '../assets/scss/navigation.scss';

class Navigation extends React.PureComponent {
	render(){
		return(
			<nav id="navbar">
				<div className="inner">
					<Link to="/" className="no-underline">
						<h5 className="logo"> uben </h5>
					</Link>
					<ul>
						<li> <Link to="/work"> work </Link> </li>
						<li> <Link to="/experience"> experience </Link> </li>
						{/* <li> <Link to="/blog"> blog </Link> </li> */}
						{/* <li> <Link to="/"> contact </Link> </li> */}
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navigation;