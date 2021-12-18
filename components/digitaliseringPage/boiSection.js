import styles from "./boiSection.module.css";
import Image from "next/image";

import Divider from "../UI/divider";

const BoiSection = () => {
	return (
		<div>
			<div className={styles.container} data-aos="new-animation">
				<div data-aos="new-animation">
					<Divider />
				</div>
				<div className={styles.imgContainer}>
					<Image
						width={1800}
						height={1200}
						src={`/kry-stor/boi-stor-gif.gif`}
						alt="Boi"
					/>
				</div>
			</div>
		</div>
	);
};
export default BoiSection;
