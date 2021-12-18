import styles from "./elySection.module.css";
import Divider from "../../UI/divider";

const ElySection = () => {
	return (
		<div>
			<div className={styles.container}>
				<Divider />
				<img
					className={styles.imgContainer}
					src="/kry-stor/jury-arm.png"
					alt="Time Line"
				/>
			</div>
		</div>
	);
};
export default ElySection;
