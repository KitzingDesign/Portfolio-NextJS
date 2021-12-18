import styles from "./digiLayoutImageSection.module.css";
import Divider from "../UI/divider";
import AOS from "aos";

const DigiLayoutImageSection = (props) => {
	return (
		<div data-aos="new-animation">
			<div className={styles.container}>
				<div data-aos="new-animation">
					<Divider />
				</div>
				<img
					className={styles.imgContainer}
					src={`/kry-stor/${props.img}.png`}
					alt="Time Line"
				/>
			</div>
		</div>
	);
};
export default DigiLayoutImageSection;
