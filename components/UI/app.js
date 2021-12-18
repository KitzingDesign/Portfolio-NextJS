import styles from "./app.module.css";

const App = (props) => {
	return (
		<div className={styles.app}>
			<img src={props.url} alt={props.alt} />
			<div>
				<h3>{props.header}</h3>
			</div>
		</div>
	);
};

export default App;
