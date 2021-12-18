import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/Layout/layout";
import Scroll from "../components/Scroll";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }) {
	return (
		<Layout>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</Layout>
	);
}

export default MyApp;
