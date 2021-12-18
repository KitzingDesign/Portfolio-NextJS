import styles from "./aboutHeader.module.css";

import Tilt from "react-tilt";

const AboutHeader = () => {
	return (
		<div className={`${styles.container} `}>
			<Tilt
				options={{ max: 20, perspective: 1000, reverse: true }}
				className={styles.parent}
			>
				<div className={styles.underImg}>
					<p>About me</p>
				</div>
				<img
					className={styles.child}
					src="/Startbild.svg"
					alt="Jakob Kitzing"
				/>
			</Tilt>

			{/* <div className={styles.under}>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
				<h1>
					KitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesignKitzingDesign
				</h1>
			</div> */}
		</div>
	);
};
export default AboutHeader;
