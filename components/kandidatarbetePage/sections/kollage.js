import styles from "./kollage.module.css";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

const Kollage = () => {
	return (
		<div className={styles.container}>
			<Zoom>
				<div className={styles.imgContainer}>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src={"/Kandidat/solutions/kollage/bild-1.jpg"}
						alt="prototyping"
					></Image>
				</div>
			</Zoom>
			<div className={styles.hide}>
				<Zoom>
					<div className={`${styles.imgContainer} `}>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							src={"/Kandidat/solutions/kollage/bild-2.jpg"}
							alt="prototyping"
						></Image>
					</div>
				</Zoom>
			</div>
			<Zoom>
				<div className={styles.imgContainer}>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src={"/Kandidat/solutions/kollage/bild-3.jpg"}
						alt="prototyping"
					></Image>{" "}
				</div>
			</Zoom>
			<Zoom>
				<div className={styles.imgContainer}>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src={"/Kandidat/solutions/kollage/bild-4.jpg"}
						alt="Surounding"
					></Image>{" "}
				</div>
			</Zoom>
			<Zoom>
				<div className={styles.imgContainer}>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src={"/Kandidat/solutions/kollage/bild-5.jpg"}
						alt="Surounding"
					></Image>{" "}
				</div>
			</Zoom>
			<Zoom>
				<div className={styles.imgContainer}>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src={"/Kandidat/solutions/kollage/bild-6.jpg"}
						alt="Surounding"
					></Image>{" "}
				</div>
			</Zoom>
			<Zoom>
				<div className={styles.imgContainer}>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src={"/Kandidat/solutions/kollage/bild-7.jpg"}
						alt="Concept"
					></Image>{" "}
				</div>
			</Zoom>
			<Zoom>
				<div className={styles.imgContainer}>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src={"/Kandidat/solutions/kollage/bild-8.jpg"}
						alt="Concept"
					></Image>{" "}
				</div>
			</Zoom>
			<Zoom>
				<div className={styles.imgContainer}>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src={"/Kandidat/solutions/kollage/bild-9.jpg"}
						alt="Concept"
					></Image>{" "}
				</div>
			</Zoom>
		</div>
	);
};

export default Kollage;
