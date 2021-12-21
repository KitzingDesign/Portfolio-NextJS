import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { EqualStencilFunc } from "three";
import AboutContent from "../../components/AboutPage/aboutContent";
import AboutHeader from "../../components/AboutPage/aboutHeader";
import WithTransition from "../../components/HOC/withTransition";
import AOS from "aos";

import Footer from "../../components/Layout/footer";

const AboutPage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);
	return (
		<Fragment>
			<AboutHeader />
			<AboutContent />
			<Footer />
		</Fragment>
	);
};

export default WithTransition(AboutPage);
