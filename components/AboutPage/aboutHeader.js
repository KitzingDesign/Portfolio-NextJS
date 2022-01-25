import styles from "./aboutHeader.module.css";
import Image from "next/image";

import Tilt from "react-parallax-tilt";
import styled from "@emotion/styled";

const AboutHeader = () => {
	const Container = styled.div`
		width: 100vw;
		height: 60vh;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		z-index: 1;
		@media (min-width: 760px) {
			padding-bottom: 0;
			height: 100vh;
		}
	`;
	const Stripe = styled.div`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 1rem);
		width: 200vw;
		height: 28%;
		z-index: -1;
		background-color: #c1e1c1;
	`;
	const ImgWrapper = styled.div`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 15rem);
		width: 50%;
	`;
	return (
		<Container>
			<Tilt
				options={{ max: 20, perspective: 1000 }}
				tiltReverse={true}
				className={styles.circle}
			>
				<Stripe></Stripe>
				<ImgWrapper>
					<Image
						width={1000}
						height={1000}
						layout="responsive"
						src="/Startbild.svg"
						alt="Jakob Kitzing"
					/>
				</ImgWrapper>
			</Tilt>
		</Container>
	);
	// return (
	// 	<div className={`${styles.container} `}>
	// 		<Tilt
	// 			options={{ max: 20, perspective: 1000 }}
	// 			className={styles.parent}
	// 			tiltReverse={true}
	// 		>
	// 			<div className={styles.underImg}></div>
	// 			<div className={styles.child}>
	// 				<Image
	// 					width={1000}
	// 					height={1000}
	// 					layout="responsive"
	// 					src="/Startbild.svg"
	// 					alt="Jakob Kitzing"
	// 				/>
	// 			</div>
	// 		</Tilt>

	// 		{/* <div className={styles.under}>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 			<h1>
	// 				KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
	// 			</h1>
	// 		</div> */}
	// 	</div>
	// );
};
export default AboutHeader;
