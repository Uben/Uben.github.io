import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import mailSVG from '../assets/images/svg/mail.svg';
import githubSVG from '../assets/images/svg/github.svg';
import linkedinSVG from '../assets/images/svg/linkedin.svg';

import '../assets/scss/pages/index.scss';

class Home extends React.PureComponent {
	render() {
		return(
			<Layout page="home">
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