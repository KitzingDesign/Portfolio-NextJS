import styles from "./hertzHeader.module.css";

const HertzHeader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.headings}>
				<div className={styles.vertical}>
					<h1 className={styles.year}>2020</h1>
					<h2 className={styles.season}>Fall</h2>
				</div>
				<h2 className={styles.above}>
					Redesign <br /> Biluthyrning
				</h2>
			</div>
			<div className={styles.headImg}>
				<img src="/Car-rental/heartzHeader.jpg" />
				{/* <img src="/Macbook-mockup-hertz.jpg" /> */}
				<h2>01</h2>
			</div>
		</div>
	);
};
export default HertzHeader;
