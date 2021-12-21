import styles from "./omProsex.module.css";
import Image from "next/image";

const OmProsex = () => {
	return (
		<div className={styles.container}>
			<h2 data-aos="fade-up">Vad är prosex.?</h2>
			<p data-aos="fade-up">
				prosex. är teknisk designs sexmästeri och pr-förening. 2019-2020 satt
				jag som pr-ansvarig i prosex. med det härliga gänget ni kan se nedan.
				Under året lärde jag mig sig otrolig mycket, både utav att arbeta i en
				så otroligt tight grupp, där det blev många sena nätter och heladagar,
				men även inom adobe programmen. och som alla redan vet är det ju pr-en
				som är det viktigaste.
			</p>
			<div className={styles.imgContainer}>
				<Image
					width="101%"
					height="63%"
					layout="responsive"
					objectFit="contain"
					src="/prosex/rummet-bild.jpg"
					alt="prosex.19"
					data-aos="fade-up"
				></Image>
			</div>
		</div>
	);
};
export default OmProsex;
