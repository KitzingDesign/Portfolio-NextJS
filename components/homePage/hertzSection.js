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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
					ligula et ex elementum lacinia non id metus. In ac est ante. Proin at
					lacus quam. Fusce gravida varius venenatis. Aliquam orci magna,
					pharetra ut ultrices eu, euismod vel augue.
				</p>
				<ProjectLink link="/Biluthyrning" />
			</div>
			<div
				className={
					stay ? `${styles.contentImg} ${styles.visableImg}` : styles.contentImg
				}
			>
				<Image
					width={1000}
					height={1000}
					src="/Macbook-mockup-hertz.png"
					alt="Mockup Car Rental webpage"
				/>
			</div>
		</div>
	);
};

export default HertzSection;
