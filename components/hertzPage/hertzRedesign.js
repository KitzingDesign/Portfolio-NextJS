import { useRef } from "react";
import styles from "./hertzRedesign.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const HertzRedesign = () => {
	const [ref, isVisible] = useInView({
		threshold: 0,
		triggerOnce: true,
	});

	return (
		<div className={styles.container}>
			<img
				className={
					isVisible ? `${styles.carSvg} ${styles.animation}` : styles.carSvg
				}
				src="/Car-rental/car.svg"
				alt="Tiny Car"
				id="car"
				ref={ref}
			/>
			<img
				className={styles.profilImg}
				src="/Car-rental/redesign.svg"
				alt="Redesign Header"
			/>
		</div>
	);
};

export default HertzRedesign;
