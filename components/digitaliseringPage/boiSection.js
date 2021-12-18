import styles from "./boiSection.module.css";

import Divider from "../UI/divider";

const BoiSection = () => {
	return (
		<div>
			<div className={styles.container} data-aos="new-animation">
				<div data-aos="new-animation">
					<Divider />
				</div>
				<img
					className={styles.imgContainer}
					src={`/kry-stor/boi-stor-gif.gif`}
					alt="Time Line"
				/>
			</div>
		</div>
	);
};
export default BoiSection;
