import styles from "./digiLayoutImageSection.module.css";
import Divider from "../UI/divider";
import Image from "next/image";

const DigiLayoutImageSection = (props) => {
	return (
		<div data-aos="new-animation">
			<div className={styles.container}>
				<div data-aos="new-animation">
					<Divider />
				</div>

				<Image
					width={1900}
					height={1200}
					src={`/kry-stor/${props.img}.png`}
					alt="Time Line"
				/>
			</div>
		</div>
	);
};
export default DigiLayoutImageSection;
