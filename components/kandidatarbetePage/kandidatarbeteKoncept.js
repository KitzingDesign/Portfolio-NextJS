import Divider from "../UI/divider";
import Koncept from "../UI/koncept";
import styles from "./kandidatarbeteKoncept.module.css";

const KandidatarbeteKoncept = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.titel} data-aos="fade-up">
				Ideegenerering
			</h2>
			<Divider color="black" data-aos="fade-up" />
			<p className={styles.text} data-aos="fade-up">
				Efter det insamlade materialet kom vi till det roliga stadiet,
				idégenereringen. Vi började att ta fram så mycket koncept som möjligt,
				högt och lågt, realistiska och futuristiska, roliga och rimliga. Efter
				framställdes tre realistiska lösningar med influenser från olika idéer
				från den tidigare idéskapandet. Dessa går att se nedan.
			</p>
			<div className={styles.koncepts} data-aos="fade-up">
				<Koncept
					titel="Koncept A"
					text="nananana"
					img="/Kandidat/konceptA.jpg"
				/>
				<Koncept
					titel="Koncept B"
					text="nananana"
					img="/Kandidat/konceptB.jpg"
				/>
				<Koncept
					titel="Koncept C"
					text="nananana"
					img="/Kandidat/konceptC.jpg"
				/>
			</div>
		</div>
	);
};
export default KandidatarbeteKoncept;
