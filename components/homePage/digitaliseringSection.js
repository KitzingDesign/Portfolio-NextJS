import styles from "./krySection.module.css";
import { ArrowRightIcon } from "@heroicons/react/solid";

import Link from "next/link";

import App from "../UI/app";

let stay = false;
const KrySection = (props) => {
	if (props.fade) {
		stay = true;
	}
	return (
		<div className={styles.container} id="Kry">
			<div className={styles.content}>
				<h2>
					En Digitaliserad <br /> Värld
				</h2>
				<div className={styles.appar}>
					<div
						className={
							stay ? `${styles.item} ${styles.animationOne}` : styles.item
						}
					>
						<App url="/eldler_logga.svg" header="Eldler" alt="Eldler logo" />
					</div>
					<div
						className={
							stay ? `${styles.item} ${styles.animationTwo}` : styles.item
						}
					>
						<App url="/ely_logga.svg" header="Ely" alt="Ely logo" />
					</div>
					<div
						className={
							stay ? `${styles.item} ${styles.animationThree}` : styles.item
						}
					>
						<App url="/jury_logga.svg" header="Jury" alt="Jury logo" />
					</div>
					<div
						className={
							stay ? `${styles.item} ${styles.animationFour}` : styles.item
						}
					>
						<App
							url="/gyno_logga.svg"
							header="Gyno"
							id="icon_1"
							alt="Gyno logo"
						/>
					</div>
					<div
						className={
							stay ? `${styles.item} ${styles.animationFive}` : styles.item
						}
					>
						<App url="/hemmy_logga.svg" header="Boi" alt="Boi logo" />
					</div>
				</div>
				<div className={styles.link}>
					<Link href="/digitalisering" passHref={true}>
						<div className={styles.projectLink}>
							<p>Utforska Projektet </p>
							<ArrowRightIcon className={styles.icon} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default KrySection;
