import Divider from "../../UI/divider";
import styles from "./eldlerSection.module.css";

const EldlerSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.sectionContainer}>
				<img
					className={styles.imgContainer}
					src="/kry-stor/eldler-stor.jpg"
					alt="Time Line"
				/>
				<img
					className={styles.svgContainer}
					src="/Loggor-namn/loggor-med-namn-03.svg"
					alt="Time Line"
				/>
			</div>
		</div>
	);
};

export default EldlerSection;
