import ProjectLink from "../UI/Project-link";

import styles from "./prosexSection.module.css";

// import produktImg from "public/static/tre-flaskor.png";

const stay = false;
const ProsexSection = (props) => {
	if (props.fade) {
		stay = true;
	}
	return (
		<div className={styles.container} id="Prosex">
			<div
				className={
					stay
						? `${styles.contentText} ${styles.visableText}`
						: styles.contentText
				}
				id="Text2"
			>
				<h2>prosex.</h2>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
					ligula et ex elementum lacinia non id metus. In ac est ante. Proin at
					lacus quam. Fusce gravida varius venenatis. Aliquam orci magna,
					pharetra ut ultrices eu, euismod vel augue. Etiam tempor, risus ut
					viverra tincidunt, orci ante vehicula quam, a hendrerit orci odio
					eleifend nisi.
				</p>
				<ProjectLink link="/prosex-page" />
			</div>
			<div
				className={
					stay ? `${styles.contentImg} ${styles.visableImg}` : styles.contentImg
				}
				id="Bild2"
			>
				<img src="/tre-flaskor.png" alt="prosex. BeerBottle" />
			</div>
		</div>
	);
};

export default ProsexSection;
