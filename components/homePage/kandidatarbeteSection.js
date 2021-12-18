import styles from "./kandidatarbeteSection.module.css";
import ProjectLink from "../UI/Project-link";

// import produktImg from "public/static/herobild.png";
const stay = false;
const KandidatarbeteSection = (props) => {
	if (props.fade) {
		stay = true;
	}
	return (
		<div className={styles.container} id="Kandidat">
			<div
				className={
					stay ? `${styles.contentImg} ${styles.visableImg}` : styles.contentImg
				}
				id="Bild"
			>
				<img src="/herobild.png" />
			</div>
			<div
				className={
					stay
						? `${styles.contentText} ${styles.visableText}`
						: styles.contentText
				}
				id="Text"
			>
				<h2>Kandidatarbete</h2>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
					ligula et ex elementum lacinia non id metus. In ac est ante. Proin at
					lacus quam. Fusce gravida varius venenatis. Aliquam orci magna,
					pharetra ut ultrices eu, euismod vel augue. Etiam tempor, risus ut
					viverra tincidunt, orci ante vehicula quam, a hendrerit orci odio
					eleifend nisi.
				</p>
				<ProjectLink
					link="kandidatarbete-page"
					alt="Prototype Kandidatarbete"
				/>
			</div>
		</div>
	);
};

export default KandidatarbeteSection;
