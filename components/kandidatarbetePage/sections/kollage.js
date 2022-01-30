import styles from "./kollage.module.css";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import styled from "@emotion/styled";

//emotion styles
const ImgContainer = styled.div`
	width: 100%;
`;
const Hide = styled(Zoom)`
	@media (max-width: 75em) {
		display: none;
	}
`;

const Kollage = () => {
	return (
		<div className={styles.container}>
			<Zoom>
				<ImgContainer>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src={"/Kandidat/solutions/kollage/bild-1.jpg"}
						alt="prototyping"
					></Image>
				</ImgContainer>
			</Zoom>
			<div className={styles.hide}>
				<Hide>
					<div className={`${styles.imgContainer}`}>
						<img
							src={"/Kandidat/solutions/kollage/bild-2.jpg"}
							alt="prototyping"
							className={styles.img}
						/>
					</div>
				</Hide>
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
