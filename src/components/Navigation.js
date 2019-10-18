import React from 'react';
import { Link } from 'gatsby';

import '../assets/scss/navigation.scss';

class Navigation extends React.PureComponent {
	render(){
		return(
			<nav id="navbar">
				<Link to="/"> <h5 className="logo"> uben </h5> </Link>
				{/* <ul>
					<li> <Link to="/"> home </Link> </li>
					<li> <Link to="/blog"> blog </Link> </li>
				</ul> */}
			</nav>
		);
	}
}

export default Navigation;