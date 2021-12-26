import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { EqualStencilFunc } from "three";
import AboutContent from "../../components/AboutPage/aboutContent";
import AboutHeader from "../../components/AboutPage/aboutHeader";
import WithTransition from "../../components/HOC/withTransition";
import AOS from "aos";

import Footer from "../../components/Layout/footer";
import Head from "next/head";

const AboutPage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);
	return (
		<Fragment>
			<Head>
				<title>About</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<AboutHeader />
			<AboutContent />
			<Footer />
		</Fragment>
	);
};

export default WithTransition(AboutPage);
