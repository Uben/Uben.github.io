import React from 'react';
// import { Link } from 'gatsby';
import { Helmet } from "react-helmet";

import Layout from '../components/Layout';

import mailSVG from '../assets/images/svg/mail.svg';
import githubSVG from '../assets/images/svg/github.svg';
import linkedinSVG from '../assets/images/svg/linkedin.svg';

import '../assets/scss/pages/index.scss';

class Home extends React.PureComponent {
	render() {
		return(
			<Layout page="home">
				<Helmet>
					<meta charset="utf-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

					<title> Bernin Uben </title>

					<meta name="HandheldFriendly" content="True" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />

					<meta name="description" content="Bernin Uben's Portfolio Site. Software Engineering && Photography." />
					{/* <link rel="shortcut icon" href="/favicon.png" type="image/png" /> */}
					<link rel="canonical" href="https://berninuben.com/" />
    
					<meta property="og:site_name" content="Bernin Uben" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Bernin Uben" />
					<meta property="og:description" content="Bernin Uben's Portfolio Site. Software Engineering && Photography." />
					<meta property="og:url" content="https://berninuben.com/" />
					{/* <meta property="og:image" content="https://www.matthewgerstman.com/content/images/2019/01/Cover-photo.jpg" /> */}
					
					{/* <meta name="twitter:card" content="summary_large_image" /> */}
					<meta name="twitter:title" content="Bernin Uben" />
					<meta name="twitter:description" content="Bernin Uben's Portfolio Site. Software Engineering && Photography." />
					<meta name="twitter:url" content="https://www.berninuben.com/" />
					{/* <meta name="twitter:image" content="https://www.matthewgerstman.com/content/images/2019/01/Cover-photo.jpg" /> */}
					<meta name="twitter:site" content="@BerninAUS" />
					{/* <meta property="og:image:width" content="2000" /> */}
					{/* <meta property="og:image:height" content="1369" /> */}
				</Helmet>

				<div id="info">
					<h1 className="name"> Bernin Uben </h1>
					<p className="title"> software engineer </p>
					<div className="divider" />
					<p className="about"> Yo. Im a Software Engineer, self-taught Web Designer, & undergraduate Computer Science student living in New Jersey. If you want to know more about me or if youʼre a Nigerian prince who wants to offer me a lot of money, feel free to <a href="mailto:berninuben@gmail.com">contact me</a>. This is my place within the IPv4 space. </p>
					<div className="work-status">
						<p> Currently <span> open </span> to new opportunities. </p>
					</div>

					<div id="social">
						<a className="icon no-underline" href="mailto:berninuben@gmail.com">
							<img src={mailSVG} alt="mail icon"/>
						</a>
						<a className="icon no-underline" href="https://github.com/uben" target="_blank" rel="noopener noreferrer">
							<img src={githubSVG} alt="github icon"/>
						</a>
						<a className="icon no-underline" href="https://linkedin.com/in/berninuben" target="_blank" rel="noopener noreferrer">
							<img src={linkedinSVG} alt="linkedin icon"/>
						</a>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Home;