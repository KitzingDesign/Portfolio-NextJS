import { Fragment } from "react";
import Link from "next/dist/client/link";

import styles from "./homeHeader.module.css";
import Navigation from "../Layout/Navigation";
import TextLoop from "../UI/textLoop";
import BlobBackground from "../UI/blobBackground";

const text = "UX/UI.";

const HomeHeader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.headerElement}>
				<div className={styles.headerText}>
					<h1>Jakob </h1>

					<TextLoop />

					<p>
						En produktdesigner med huvudfokus på digitala produkter och UX/UI.
						Min filosofi och det jag genuint brinner för är att utveckla
						kreativa produkter och tjänster där användaren alltid står i
						centrum.
					</p>
					<Link href="/about">
						<a className={styles.btn}>Mer om mig</a>
					</Link>
				</div>
				<div className={styles.headerImg}>
					<BlobBackground />
				</div>
			</div>
		</div>
	);
};

export default HomeHeader;
