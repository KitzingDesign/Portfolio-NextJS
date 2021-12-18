import styles from "./blobBackground.module.css";

const BlobBackground = () => {
	return (
		<div className={styles.containerV2}>
			<img
				className={styles.profilImg}
				src="/Startbild.svg"
				alt="Jakob Kitzing"
			/>
			<div
				className={styles.shapeBlob}
				style={{
					backgroundColor: "red",
				}}
			></div>
		</div>
	);
};
export default BlobBackground;
