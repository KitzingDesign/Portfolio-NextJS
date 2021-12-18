import styles from "./app.module.css";
import Image from "next/image";

const App = (props) => {
	return (
		<div className={styles.app}>
			<Image width={1000} height={1000} src={props.url} alt={props.alt} />
			<div>
				<h3>{props.header}</h3>
			</div>
		</div>
	);
};

export default App;
