import ProjectLink from "../UI/Project-link";
import Image from "next/image";

import styles from "./hertzSection.module.css";
// import produktImg from "public/static/Macbook-mockup-hertz.jpg";
const stay = false;
const HertzSection = (props) => {
	if (props.fade) {
		stay = true;
	}
	return (
		<div className={styles.container} id="Hertz">
			<div
				className={
					stay
						? `${styles.contentText} ${styles.visableText}`
						: styles.contentText
				}
			>
				<h2>Biluthyrning</h2>
				<p className={styles.text}>
					Att känna frustration när man ska använda en hemsida är något som kan
					skapa en negativ bild av hela varumärket. Jag och några kursare hade
					som arbete att förbättra en biluthyrningshemsida ur ett usability
					perspektiv, för att just slippa denna frustration.
				</p>
				<ProjectLink link="/Biluthyrning" />
			</div>
			<div
				className={
					stay ? `${styles.contentImg} ${styles.visableImg}` : styles.contentImg
				}
			>
				<Image
					width="100%"
					height="100%"
					layout="responsive"
					objectFit="contain"
					src="/Macbook-mockup-hertz.png"
					alt="Mockup Car Rental webpage"
				/>
			</div>
		</div>
	);
};

export default HertzSection;
