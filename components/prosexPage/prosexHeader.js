import styles from "./prosexHeader.module.css";
import Image from "next/image";

const ProsexHeader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<div className={styles.under}>
					<div className={styles.imgAbove}>
						<Image
							width="100%"
							height="145%"
							layout="responsive"
							objectFit="contain"
							src="/prosex/bira-above.png"
							alt="prosex. summer beer"
						></Image>
					</div>
					<div className={styles.imgBelow}>
						<Image
							width="100%"
							height="149%"
							layout="responsive"
							objectFit="contain"
							src="/prosex/bira-below.png"
							alt="shadow"
						></Image>
					</div>
					<div className={styles.svg}>
						<Image
							width="100%"
							height="50%"
							layout="responsive"
							objectFit="contain"
							src="/prosex/stripes.svg"
							alt="strieps for background"
						></Image>
					</div>
					<div className={styles.divider}></div>
				</div>
			</div>
		</div>
	);
};

export default ProsexHeader;
