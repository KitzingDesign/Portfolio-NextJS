import styles from "./koncept.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Koncept = (props) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.titel}>{props.titel}</h2>
			<p>{props.text}</p>

			<Zoom>
				<img src={props.img} style={{ width: "100%" }}></img>
			</Zoom>
		</div>
	);
};

export default Koncept;
