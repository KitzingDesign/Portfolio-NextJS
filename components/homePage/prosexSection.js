import ProjectLink from "../UI/Project-link";
import Image from "next/image";
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
					2019-2020 satt jag som pr-ansvarig i teknisk designs pr och
					sexmästeri. Det var både väldigt lärorikt att jobba i en så tight
					grupp, samt att jag lärde mig väldigt mycket kring adobe suite och
					grafisk design.
				</p>
				<ProjectLink link="/prosex-page" />
			</div>
			<div
				className={
					stay ? `${styles.contentImg} ${styles.visableImg}` : styles.contentImg
				}
				id="Bild2"
			>
				<div className={styles.img}>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src="/tre-flaskor.png"
						alt="prosex. BeerBottle"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProsexSection;
