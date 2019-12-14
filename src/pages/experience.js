import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Helmet } from "react-helmet";

import Layout from '../components/Layout.js';

import '../assets/scss/pages/experience.scss';

import twoWordsLogo from '../assets/images/two-words-logo-alt.svg';

class Experience extends React.PureComponent {
	render() {
		return(
			<Layout page="experience">
				<Helmet>
					<title> Experience | Bernin Uben </title>
					<meta name="description" content="Past work & school experience - Bernin Uben's Portfolio Site" />
					<link rel="canonical" href="https://berninuben.com/experience" />

					<meta property="og:site_name" content="Bernin Uben" />
					<meta property="og:title" content="Experience | Bernin Uben" />
					<meta property="og:description" content="Past work & school experience - Bernin Uben's Portfolio Site" />
					<meta property="og:url" content="https://berninuben.com/experience" />

					<meta name="twitter:title" content="Experience | Bernin Uben" />
					<meta name="twitter:description" content="Past work & school experience - Bernin Uben's Portfolio Site" />
				</Helmet>

				<div className="intro intro-exp">
					<h1> Experience </h1>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
				</div>

				<div id="exp">
					<div id="tw-web-dev" class="section">
						<div class="img-container">
							<img src={ twoWordsLogo } alt="two words digital agency logo" />
						</div>

						<div class="info">
							<h5 class="title"> Web Developer </h5>
							<p class="subtitle"> two words digital agency <span> &bull; </span> september 2016 - present </p>
							<ul class="desc">
								<li> Full-stack web development with Node.js(Express/Koa), React.js, & MongoDB/MySQL from conception to deployment </li>
								<li> Utilized Sketch for UX/UI designs, icons, email templates, etc. </li>
								<li> Use of HTML, CSS, Javascript, & WordPress to create websites </li>
								<li> Maintenance of legacy PHP/Wordpress websites. </li>
							</ul>
							<OutboundLink href="https://twowords.co/" title="Visit Website" class="btn-highlight" target="_blank" rel="noopener noreferrer">Website</OutboundLink>
						</div>
					</div>

					<div id="tw-intern" class="section">
						<div class="img-container">
							<img src={ twoWordsLogo } alt="two words digital agency logo" />
						</div>

						<div class="info">
							<h5 class="title"> Web Developer Intern </h5>
							<p class="subtitle"> two words digital agency <span> &bull; </span> june 2016 - september 2016 </p>
							<ul class="desc">
								<li> E-Commerce websites with HTML, CSS, Javascript, & PHP </li>
								<li> Maintained legacy Wordpress & PHP websites </li>
								<li> Utilized Photoshop/Illustrator for UX/UI designs </li>
							</ul>
							<OutboundLink href="https://twowords.co/" title="Visit Website" class="btn-highlight" target="_blank" rel="noopener noreferrer">Website</OutboundLink>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Experience;