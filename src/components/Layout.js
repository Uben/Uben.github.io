import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';
import Footer from './Footer';

import '../assets/scss/_base.scss';

class Layout extends React.PureComponent {
	render() {
		return (
			<div id="site-wrapper" className={`page-${this.props.page}`}>
				<Navigation />
				
				<main id="content">
					{this.props.children}
				</main>

				<Footer />
			</div>
		)
	}
}

Layout.propTypes = {
	page: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Layout;