import Divider from "../UI/divider";
import styles from "./KandidatarbeteBakgrund.module.css";
import Image from "next/image";

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
					<div className={styles.imgContainer}>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							src="/Kandidat/Chalmers.svg"
							alt="Chalmers logo"
						/>
					</div>
					<div className={styles.imgContainer}>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							className={styles.imgContainer}
							src="/Kandidat/Boid.svg"
							alt="Boid logo"
						/>
					</div>
					<div className={styles.imgContainer}>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							className={styles.imgContainer}
							src="/Kandidat/Vargön.svg"
							alt="Vargön Alloys logo"
						/>
					</div>
					<div className={styles.imgContainer}>
						<Image
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							className={styles.imgContainer}
							src="/Kandidat/Guard.svg"
							alt="Guard logo"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default KandidatarbeteBakgrund;
