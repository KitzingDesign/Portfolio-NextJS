import { Fragment, useEffect } from "react";
import BoiSection from "../../components/digitaliseringPage/boiSection";
import DigiBakgrund from "../../components/digitaliseringPage/digiBakgrund";
import DigiHeader from "../../components/digitaliseringPage/digiHeader";
import DigiLayoutImageSection from "../../components/digitaliseringPage/digiLayoutImageSection";
import WithTransition from "../../components/HOC/withTransition";

import AOS from "aos";
import Footer from "../../components/Layout/footer";

const KryPage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);
	return (
		<Fragment>
			<DigiHeader />

			<DigiBakgrund />

			<DigiLayoutImageSection img="eldler-stor-logga" />

			<DigiLayoutImageSection img="jury-arm" />
			<DigiLayoutImageSection img="ely-stor-logga" />
			<DigiLayoutImageSection img="gyno-stor-logga" />
			<BoiSection />
			<Footer />
		</Fragment>
	);
};

export default WithTransition(KryPage);
