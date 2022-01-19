import styles from "./aboutHeader.module.css";
import Image from "next/image";

import Tilt from "react-parallax-tilt";

const AboutHeader = () => {
	return (
		<div className={`${styles.container} `}>
			<Tilt
				options={{ max: 20, perspective: 1000 }}
				tiltReverse={true}
				className={styles.circle}
			>
				<div className={styles.stripe}></div>
				<div className={styles.imgWrapper}>
					<Image
						width={1000}
						height={1000}
						layout="responsive"
						src="/Startbild.svg"
						alt="Jakob Kitzing"
					/>
				</div>
			</Tilt>
		</div>
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
