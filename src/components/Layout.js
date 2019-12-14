import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Navigation from './Navigation';
import Footer from './Footer';

import siteIcon from '../../static/favicon.png';

import '../assets/scss/_base.scss';
import '../assets/scss/layout.scss';

class Layout extends React.PureComponent {
	render() {
		return (
			<div id="site-wrapper" className={`page-${this.props.page}`}>
				<Helmet>
					<meta charset="utf-8" />
					<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="robots" content="index, follow" />
					<meta name="HandheldFriendly" content="True" />
					<link rel="shortcut icon" href={ siteIcon } type="image/png" />

					{/* <!-- Chrome, Firefox OS and Opera --> */}
					<meta name="theme-color" content="#1f567a" />
					{/* <!-- iOS Safari --> */}
					<meta name="apple-mobile-web-app-status-bar-style" content="#1f567a" />
    
    				<meta property="og:locale" content="en_US"/>
					<meta property="og:type" content="website" />

					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@BerninAUS" />
				</Helmet>

				<div id="site-outline"/>
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