import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import '../assets/scss/pages/work.scss';

class Home extends React.PureComponent {
	render() {
		return(
			<Layout page="work">
				<div id="intro">
					<h1> Work </h1>
					<p> This is a small selection of work I have completed over the past couple of years consiting of anything from work && personal/school projects. Take a look at what I have put my head down into. </p>
				</div>

				<div id="work">
					<div id="performx" class="section">
						<div class="img-container">
							<img src="https://web.njit.edu/~bau4/profile/home_files/performx-los.png"/>
						</div>

						<div class="info">
							<h5 class="title"> Library of Standards </h5>
							<h6 class="subtitle"> PerformX </h6>
							<p class="desc"> The Library of Standards a component of the PerformX platform built with React.js, Koa.js/Node, &amp; MongoDB. With a library for coaching employees with relevant content to help improve the patient experience, PerformX is a patient focused digital surveying tool. </p>
							<a href="https://performx.co/" title="Visit Website" class="btn-highlight" target="_blank" rel="noopener">Website</a>
						</div>
					</div>

					<div id="stubbox" class="section">
						<div class="img-container">
							<img src="https://web.njit.edu/~bau4/profile/home_files/stubboxoffice.png"/>
						</div>

						<div class="info">
							<h5 class="title"> Stub Boxoffice </h5>
							<h6 class="subtitle"> Private </h6>
							<p class="desc"> Stub Boxoffice is a reseller marketplace for ticketed events. Rebuilt the entire site on top of Express.js/Node, MySQL, and the TicketNetwork SOAP api. Improved page loads from 4-5 seconds with PHP to an average of 1 second on Node.js. Cached pages, site assets, TLS/SSL certificates, etc. are all served through NGiNX acting as a reverse proxy. </p>
							<a href="https://stubboxoffice.com/" title="Visit Website" class="btn-highlight" target="_blank" rel="noopener">Website</a>
						</div>
					</div>

					<div id="webserver" class="section">
						<div class="img-container">
							<img src="https://web.njit.edu/~bau4/profile/home_files/webserver.png"/>
						</div>

						<div class="info">
							<h5 class="title"> C Webserver </h5>
							<h6 class="subtitle"> NJIT CS288 </h6>
							<p class="desc"> An implementation of a simple HTTP webserver. The webserver can successfully respond to page requests initiated from a web browser along with the appropriate HTTP status code. With this project I gained a deeper understanding of: how to handle network connections in Linux/C, the client-server model, the HTTP protocol. </p>
							<a href="https://github.com/Uben/C-Webserver" title="Github" class="btn-highlight" target="_blank" rel="noopener">Github</a>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Home;
