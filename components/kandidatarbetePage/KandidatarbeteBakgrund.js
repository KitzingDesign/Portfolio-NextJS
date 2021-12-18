import Divider from "../UI/divider";
import styles from "./KandidatarbeteBakgrund.module.css";

const KandidatarbeteBakgrund = () => {
	return (
		<div className={styles.container}>
			{/* <p className={styles.bakgrund}>Bakgrund</p> */}
			<h2 data-aos="fade-up">Bakgrund</h2>
			<Divider color="black" />

			<p data-aos="fade-up">
				© Boström Dagberg Jilsén Kitzing Kullerstrand Silberberg
			</p>

			<section data-aos="fade-up">
				Vi som kandidatgrupp fick som arbete att tillsammans med företaget Boid
				ta fram ett nytt mordaniserat kontrollrum för legeringsverket Vargön
				Alloys AB. I nuläget har Vargön fyra st kontrollrum, ett vid vadera ugn.
				Projektets mål var att samla dessa fyra kontrollrum till ett stort
				gemensamt kontrollrum, så att styrningen sker remote från ugnen. <br />
				<br />
				Detta resulterade i en del förändringar kring då mycket av arbetet
				påverkas av just närheten till ugnen. Vår del i projektet var att skapa
				ett koncept för Smältarens arbetsplats. Smältarens arbetsuppgifter är
				att styra ugnen genom att bland annat, fylla på material, styra
				temperaturen och övervaka ugnen ifall något skulle gå fel. Utöver Boid
				ingick även företaget Guard AB i projektet, deras ansvar var att skapa
				självaste automationen till ugnen.
				<br />
				<br /> Att få jobba i ett större projekt var mycket lärorikt då under
				projektets gång kom det nya upptäckter vilket vi var tvungna att
				förhålla oss till. Detta ledde till att vi hela tiden var tvugna att
				vara öppensinnade och flexibla för att kunna skapa ett så bra koncept
				som möjligt för en fungerande helhet. Nedan presenteras de olika faserna
				i arbetet kortfattat.
			</section>

			<h3 data-aos="fade-up">Collaberation Between</h3>
			<div data-aos="fade-up">
				<div className={styles.flexImg}>
					<img
						className={styles.imgContainer}
						src="/kandidat/Chalmers.svg"
						alt="Chalmers logo"
					/>

					<img
						className={styles.imgContainer}
						src="/kandidat/Boid.svg"
						alt="Boid logo"
					/>
					<img
						className={styles.imgContainer}
						src="/kandidat/Vargön.svg"
						alt="Vargön Alloys logo"
					/>
					<img
						className={styles.imgContainer}
						src="/kandidat/Guard.svg"
						alt="Guard logo"
					/>
				</div>
			</div>
		</div>
	);
};
export default KandidatarbeteBakgrund;
