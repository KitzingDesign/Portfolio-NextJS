import ProsexHeader from "../../components/prosexPage/prosexHeader";
import WithTransition from "../../components/HOC/withTransition";
import { Fragment, useEffect } from "react";
import OmProsex from "../../components/prosexPage/omProsex";
import ProsexKollage from "../../components/prosexPage/prosexKollage";
import Footer from "../../components/Layout/footer";
import AOS from "aos";

const ProsexPage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);
	return (
		<Fragment>
			<ProsexHeader />
			<OmProsex />
			<ProsexKollage />
			<Footer />
		</Fragment>
	);
};

export default WithTransition(ProsexPage);
