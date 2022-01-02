import HertzHeader from "../../components/hertzPage/hertzHeader";
import Sticky from "react-sticky-el";
import styles from "./index.module.css";
import { Fragment, useEffect } from "react";
import Navigation from "../../components/Layout/Navigation";
import HertzBakgrund from "../../components/hertzPage/hertzBakgrund";
import HertzRedesign from "../../components/hertzPage/hertzRedesign";
import HertzOld from "../../components/hertzPage/hertzOld";
import HertzNew from "../../components/hertzPage/hertzNew";
import withTransition from "../../components/HOC/withTransition";
import BilResults from "../../components/hertzPage/bilResults";
import Footer from "../../components/Layout/footer";
import AOS from "aos";
import Head from "next/head";
import { motion } from "framer-motion";

const HertzPage = () => {
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);
	return (
		<Fragment>
			<Head>
				<title>Car Rental</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<p className={styles.sticky}>
				Usability - Teknisk Design Chalmers - 2020
			</p>

			<HertzHeader />
			<HertzBakgrund />
			<HertzOld />
			<HertzRedesign />
			<HertzNew />
			<BilResults />
			<Footer />
			<motion.div
				className="slide-in"
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 0 }}
				exit={{ scaleX: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}
			/>
			<motion.div
				className="slide-out"
				initial={{ scaleX: 1 }}
				animate={{ scaleX: 0 }}
				exit={{ scaleX: 0 }}
				transition={{ duration: 1, ease: "easeInOut" }}
			/>
		</Fragment>
	);
};
export default HertzPage;
