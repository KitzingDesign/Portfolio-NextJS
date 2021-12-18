import { Fragment } from "react";
import Divider from "../UI/divider";

import styles from "./kandidatarbeteSlutkoncept.module.css";
import SolutionOne from "./sections/solutionOne";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Kollage from "./sections/kollage";

const KandidatarbeteSlutkocept = () => {
	return (
		<Fragment>
			<div className={styles.containerUpper}>
				<div className={styles.textContainer}>
					<h2 data-aos="fade-up">Slutkoncept</h2>
					<div className={styles.divider} data-aos="fade-up"></div>
					<p data-aos="fade-up">
						Contrary to popular belief, Lorem Ipsum is not simply random text.
						It has roots in a piece of classical Latin literature from 45 BC,
						making it over 2000 years old. Richard McClintock, a Latin professor
						at Hampden-Sydney College in Virginia, looked up one of the more
						obscure
					</p>
				</div>
				<div className={styles.imgContainer}>
					<img src="/Kandidat/hero-bild.png" alt="The Arc" />

					<div className={styles.frame}>
						<h1>The Arc</h1>
					</div>
				</div>
				<SolutionOne
					titel="Smutshantering"
					divider="dividerR"
					urlFirst="above-view"
					firstTitel="Avgränsning"
					firstText="Bardisk"
					urlSecond="bar-view"
					secondTitel="då"
					secondText="då"
					alt="Smutshantering"
				/>
				<SolutionOne
					titel="Närhet till Ugn"
					divider="dividerL"
					urlFirst="screens-view"
					firstTitel="Visuell Representation"
					firstText="hej"
					urlSecond="screen-view"
					secondTitel="NTU-Skärm"
					secondText="då"
					alt="närhet Till ugn"
				/>
				<SolutionOne
					titel="Kommunikation"
					divider="dividerR"
					urlFirst="hang-view"
					firstTitel="Bardisk"
					firstText="hej"
					urlSecond="above-view"
					secondTitel="Hörlurar"
					secondText="då"
					alt="Kommunikation"
				/>
				<SolutionOne
					titel="Larm och säkerhet"
					divider="dividerL"
					urlFirst="speaker-view"
					firstTitel="Visuellt"
					firstText="hej"
					urlSecond="clock-view"
					secondTitel="Haptiskt"
					secondText="då"
					alt="Larm och säkerhet"
				/>
			</div>
			<div className={styles.container}>
				<h2 data-aos="fade-up">Styrning</h2>
				<Divider color="black" />
				<p data-aos="fade-up">
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
				</p>
				<div className={styles.styrContainer} data-aos="fade-up">
					<Zoom>
						<img
							src={"/Kandidat/solutions/styr-view.jpg"}
							style={{ width: "100%" }}
							alt="controls"
						></img>
					</Zoom>
					<Zoom>
						<img
							src={"/Kandidat/solutions/styrbord-view.jpg"}
							style={{ width: "100%" }}
							alt="Controls placing"
						></img>
					</Zoom>
				</div>
			</div>
			<div className={styles.kollageContainer}>
				<h2 data-aos="fade-up">Lärdomar</h2>
				<Divider color="black" />
				<p data-aos="fade-up">
					Det var otroligt lärorikt att få jobba i ett så omfattande projekt som
					detta ändå var. Att alltid handskas med flera aktörer och behöva tänka
					om för att få det så bra som möjligt
				</p>
				<div className={styles.kollage}>
					<Kollage />
				</div>
			</div>
		</Fragment>
	);
};

export default KandidatarbeteSlutkocept;
