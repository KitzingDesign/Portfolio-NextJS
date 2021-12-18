import styles from "./cards.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Cards = (props) => {
	return (
		<Zoom>
			<img
				className={styles.card}
				style={{ width: "100%" }}
				src={props.url}
				alt={props.alt}
			/>
		</Zoom>
	);
};
export default Cards;
