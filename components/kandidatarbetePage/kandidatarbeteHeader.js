import styles from "./kandidatarbeteHeader.module.css";
import Image from "next/image";

const KandidatarbeteHeader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.headings}>
				<div className={styles.vertical}>
					<h1 className={styles.year}>2021</h1>
					<h1 className={styles.season}>Spring</h1>
				</div>
				<h1 className={styles.above}>
					Redesign <br /> Arbetsplat
				</h1>
			</div>
			<div className={styles.headImg}>
				<Image
					width="100%"
					height="100%"
					layout="responsive"
					objectFit="contain"
					src="/headerKandidatpng.png"
					alt="Six Computer Screens"
				/>
				{/* <img src="/Macbook-mockup-hertz.jpg" /> */}
				<h2 className={styles.nr}>02</h2>
			</div>
		</div>
	);
};

export default KandidatarbeteHeader;
