import styles from "./omProsex.module.css";
import Image from "next/image";

const OmProsex = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h2 data-aos="fade-up">Vad är prosex.?</h2>
				<p data-aos="fade-up" className={styles.text}>
					prosex. är teknisk designs sexmästeri och pr-förening. 2019-2020 satt
					jag som pr-ansvarig i prosex. med det härliga gänget ni kan se nedan.
					Mitt år som sittandes i prosex. var bland det roligaste jag gjort! Att
					arbeta dag såväl som natt, att lösa problem i stressiga situationer
					och att alltid försöka få ens arrangemang att bli så bra som möjligt
					kunde ibland bli lite påfrestande, men att få se ett lyckat evenemang
					som vi lyckats få ihop gjorde det värt alla dagar i veckan. Ett plus i
					det hela är att jag även fick utveckla mina kunskaper i adobe suit
					under tiden.
				</p>
			</div>
			<div className={styles.imgContainer} data-aos="fade-up">
				<Image
					width="101%"
					height="63%"
					layout="responsive"
					objectFit="contain"
					src="/prosex/rummet-bild.jpg"
					alt="prosex.19"
				></Image>
			</div>
		</div>
	);
};
export default OmProsex;
