import { Fragment, useEffect } from "react";
import KandidatarbeteBakgrund from "../../components/kandidatarbetePage/KandidatarbeteBakgrund";
import KandidatarbeteSmalter from "../../components/kandidatarbetePage/KandidadarbeteSmalter";
import KandidatarbeteHeader from "../../components/kandidatarbetePage/kandidatarbeteHeader";
import KandidatarbeteProblem from "../../components/kandidatarbetePage/kandidatarbeteProblem";
import KandidatarbeteKoncept from "../../components/kandidatarbetePage/kandidatarbeteKoncept";
import KandidatarbeteSlutkocept from "../../components/kandidatarbetePage/kandidatarbeteSlutkoncept";
import WithTransition from "../../components/HOC/withTransition";
import Footer from "../../components/Layout/footer";

import styles from "./index.module.css";
import AOS from "aos";
import { useInView } from "react-intersection-observer";

const KandidatarbetePage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);

	return (
		<div className={styles.styles}>
			<KandidatarbeteHeader />
			<KandidatarbeteBakgrund />
			<KandidatarbeteProblem />
			<KandidatarbeteKoncept />
			<KandidatarbeteSmalter />
			<KandidatarbeteSlutkocept />
			<Footer />
		</div>
	);
};

export default WithTransition(KandidatarbetePage);
