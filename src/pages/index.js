import React from "react";

import Layout from '../components/Layout';

import '../assets/scss/pages/index.scss';

class Home extends React.PureComponent {
	render() {
		return(
			<Layout page="home">
				<main className="content">
					<div id="home-info">
						<h1 className="name"> Bernin Uben </h1>
						<p className="title"> web developer </p>
						<div className="divider" />
						<p className="about"> Yo. Im a Web Developer, self-taught Designer, & undergraduate Computer Science student living in New Jersey. If you want to know more about me or if youʼre a Nigerian prince who wants to offer me a lot of money, feel free to contact me. This is my place within the IPv4 space. </p>
					</div>
				</main>
			</Layout>
		);
	}
}

export default Home;
