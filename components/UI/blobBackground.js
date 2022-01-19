import styles from "./blobBackground.module.css";
import Image from "next/image";

const BlobBackground = () => {
	return (
		<div className={styles.container}>
			<div className={styles.profilImg}>
				<Image
					src="/Startbild.svg"
					width={1000}
					height={1000}
					alt="Jakob Kitzing"
				/>
			</div>
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
