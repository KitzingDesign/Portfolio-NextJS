import styles from "./hertzBakgrund.module.css";
import Image from "next/image";

const HertzBakgrund = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2 className={styles.Bakgrund} data-aos="fade-up">
					Bakgrund
				</h2>
				<p data-aos="fade-up">
					Tillsammans med fyra kursare fick vi i uppdrag att utvärdera och
					förbättra gränssnittet för biluthyrningsföretags hemsida. Genom att
					analysera den befintliga hemsidan ur ett usability perspektiv skapades
					en ny prototyp som ställdes emot den befintliga sidan. Nedan kan en
					sammanfattning av processen ses.
				</p>
				<div className={styles.divider} data-aos="fade-up"></div>
				<p className={styles.copywrite} data-aos="fade-up">
					© Kitzing Dexner Neidert Kristoffersson Sandberg
				</p>
				<h2 className={styles.process} data-aos="fade-up">
					Process
				</h2>
				<div className={styles.profilImg}>
					<Image
						width="100%"
						height="19%"
						layout="responsive"
						objectFit="contain"
						src="/bilCompany/bil-timeline.png"
						alt="Time Line"
						data-aos="fade-right"
					/>
				</div>
			</div>
		</div>
	);
};

export default HertzBakgrund;
