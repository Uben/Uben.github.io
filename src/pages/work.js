import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Helmet } from "react-helmet";

import Layout from '../components/Layout';

import aSVG from '../assets/images/svg/letters/A.svg';
import cSVG from '../assets/images/svg/letters/C.svg';
import lSVG from '../assets/images/svg/letters/L.svg';
import sSVG from '../assets/images/svg/letters/S.svg';

import '../assets/scss/pages/work.scss';

class Work extends React.PureComponent {
	render() {
		return(
			<Layout page="work">
				<Helmet>
					<title> Work | Bernin Uben </title>
					<meta name="description" content="Previous Work - Bernin Uben's Portfolio Site" />
					<link rel="canonical" href="https://berninuben.com/work" />
    
					<meta property="og:site_name" content="Work | Bernin Uben" />
					<meta property="og:title" content="Work | Bernin Uben" />
					<meta property="og:description" content="Previous Work - Bernin Uben's Portfolio Site" />
					<meta property="og:url" content="https://berninuben.com/work" />

					<meta name="twitter:title" content="Work | Bernin Uben" />
					<meta name="twitter:description" content="Previous Work - Bernin Uben's Portfolio Site" />
				</Helmet>

				<div id="intro">
					<h1> Work </h1>
					<p> This is a small selection of work I have completed over the past couple of years consiting of anything from work to personal/school projects. Take a look at what I have put my head down into. </p>
				</div>

				<div id="work">
					<div id="empathee" class="section">
						<div class="img-container">
							<img src={lSVG} alt="giant-L icon"/>
						</div>

						<div class="info">
							<h5 class="title"> Library of Standards </h5>
							<p class="subtitle"> empathee <span> &bull; </span> 2018 </p>
							<p class="desc"> The Library of Standards a component of the empathee platform built with React.js, Koa.js/Node, &amp; MongoDB. With a library for coaching employees with relevant content to help improve the patient experience, empathee is a patient focused digital surveying tool. </p>
							<OutboundLink href="https://empathee.com/" title="Visit Website" class="btn-highlight" target="_blank" rel="noopener noreferrer">Website</OutboundLink>
						</div>
					</div>

					<div id="stubbox" class="section">
						<div class="img-container">
							<img src={sSVG} alt="giant-S icon"/>
						</div>

						<div class="info">
							<h5 class="title"> Stub Boxoffice </h5>
							<p class="subtitle"> Private <span> &bull; </span> 2019 </p>
							<p class="desc"> Stub Boxoffice is a reseller marketplace for ticketed events. Rebuilt on Express.js/Node, MySQL, and the TicketNetwork SOAP api. Improved page loads from 4-5 seconds with PHP to ~1 second with Node.js. Service served & cached through NGiNX acting as a reverse proxy. </p>
							<OutboundLink href="https://stubboxoffice.com/" title="Visit Website" class="btn-highlight" target="_blank" rel="noopener noreferrer">Website</OutboundLink>
						</div>
					</div>

					<div id="webserver" class="section">
						<div class="img-container">
							<img src={cSVG} alt="giant-C icon"/>
						</div>

						<div class="info">
							<h5 class="title"> C Webserver </h5>
							<p class="subtitle"> NJIT CS288 <span> &bull; </span> 2017 </p>
							<p class="desc"> An implementation of a simple HTTP webserver. The webserver can successfully respond to page requests initiated from a web browser along with the appropriate HTTP status code. With this project I gained a deeper understanding of: how to handle network connections in Linux/C, the client-server model, the HTTP protocol. </p>
							<OutboundLink href="https://github.com/Uben/C-Webserver" title="Github" class="btn-highlight" target="_blank" rel="noopener noreferrer">Github</OutboundLink>
						</div>
					</div>

					<div id="athletix" class="section">
						<div class="img-container">
							<img src={aSVG} alt="giant-A icon"/>
						</div>

						<div class="info">
							<h5 class="title"> Athletix - United Kingdom </h5>
							<p class="subtitle"> Athletix <span> &bull; </span> 2019 </p>
							<p class="desc"> A seperate ecommerce site built on Wordpress for the launch of Athletix in the United Kingdom. Themed Woocommerce templates to match designs of the Home, Shop, About, CBD Oil, & Contact Pages. Athletix is a Broad Spectrum CBD Oil For Athletes. </p>
							<OutboundLink href="https://athletixcbd.co.uk/" title="Visit Website" class="btn-highlight" target="_blank" rel="noopener noreferrer">Website</OutboundLink>
						</div>
					</div>

					<div id="corsair" class="section">
						<div class="img-container">
							<img src={cSVG} alt="giant-c icon"/>
						</div>

						<div class="info">
							<h5 class="title"> Corsair Construction </h5>
							<p class="subtitle"> Corsair Construction <span> &bull; </span> 2019 </p>
							<p class="desc"> Built portfolio site based on Wordpress for Corsair Construction LLC. I had full creative control on this site from site design to development. (About page & other styles have been updated after my final push. Site layout might break on mobile.) </p>
							<OutboundLink href="https://corsairconstruction.com/" title="Visit Website" class="btn-highlight" target="_blank" rel="noopener noreferrer">Website</OutboundLink>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Work;