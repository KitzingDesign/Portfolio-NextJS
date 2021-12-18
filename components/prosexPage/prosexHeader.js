import styles from "./prosexHeader.module.css";

const ProsexHeader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<div className={styles.under}>
					<img className={styles.imgAbove} src="/prosex/bira-above.png"></img>
					<img className={styles.imgBelow} src="/prosex/bira-below.png"></img>
					<img className={styles.svg} src="/prosex/stripes.svg"></img>

					<div className={styles.divider}></div>
				</div>
			</div>
		</div>
	);
};

export default ProsexHeader;
