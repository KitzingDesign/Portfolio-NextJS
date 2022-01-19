import styles from "./aboutContent.module.css";
import Skills from "./aboutComponenter/skills";
import { Fragment, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SkillStatic from "./aboutComponenter/skillsStatic";

const AboutContent = () => {
	const designList = [
		"Photoshop",

		"Illustrator",
		"Indesign",
		"XD",
		"Figma",
		"Fusion",
		"Key Shot",
	];
	const generellList = [
		"UX/UI",
		"User Research",
		"Rappid Prototyping",
		"Ergonomi",
		"Wireframing",
		"Usability",
	];
	const programmingList = ["CSS/HTML", "JS", "React/next.JS", "Python"];

	const [ref, isVisible] = useInView({
		threshold: 0.9,
		triggerOnce: true,
	});
	const [refTwo, isVisableTwo] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});
	const [refThree, isVisableThree] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});
	const [refFour, isVisableFour] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	return (
		<Fragment>
			<div className={styles.container}>
				<h1 className={styles.titelAbove}>about</h1>
				<div className={styles.titelUnder}></div>

				<div className={styles.flexText}>
					<p
						className={
							isVisible ? `${styles.text} ${styles.textOne}` : styles.text
						}
						ref={ref}
					>
						Mitt namn är Jakob, en UX/UI-designer, Human reasercher,
						produktutvecklare och en musikälskare, allt från indie-musik till
						jazz dånar i lurarna. Som person är jag utåtriktad och mån om min
						omgivning, allt blir roligare ifall folk runt en trivs och min
						filosofi är att om man har roligt så syns det även på resultatet.{" "}
						<br /> <br />
						Som designer är jag en nyfiken prick, jag vill alltid lära mig nya
						saker och utmana mig själv och jag älskar att jobba i olika
						sammanställningar för att få nya perspektiv.
						<br /> <br /> Sommaren (2021) tog jag min kandidatexamen från
						Teknisk Design på Chalmers, där lärde jag mig vikten i att alltid ha
						användaren i centrum, det är ju trots allt för dem arbetet görs.
						Under min kandidat insåg jag att mitt främsta intresse var digitala
						produkter med allt vad det innefattar. För att få en djupare
						förståelse inom området tog jag ett sabbatsår där jag under hösten
						lärde mig front end utveckling på egen hand. Genom att sitta med det
						fick jag en ännu större bekräftelse att det digitala
						produktframtagandet är rätt för mig.
					</p>
					<div className={styles.flexSkills}>
						<div>
							<h2 data-aos="fade-up">Generella</h2>
							<div ref={refTwo}>
								{isVisableTwo ? <Skills skillList={generellList} /> : null}
							</div>
						</div>
						<div>
							<h2 data-aos="fade-up">Design</h2>
							<div ref={refThree}>
								{isVisableThree ? <Skills skillList={designList} /> : null}
								{/* <Skills text="Photoshop" />
								<Skills text="Illustrator" />
								<Skills text="Indesign" />
								<Skills text="XD" />
								<Skills text="Figma" />
								<Skills text="Fusion" />
								<Skills text="Key Shot" /> */}
							</div>
						</div>
						<div>
							<h2 data-aos="fade-up">Programming</h2>
							<div ref={refFour}>
								{isVisableFour ? <Skills skillList={programmingList} /> : null}
								{/* <Skills text="CSS/HTML" />
								<Skills text="JS" />
								<Skills text="React/next.JS" />
								<Skills text="Python" /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.educationContainer} data-aos="fade-right">
				<div className={styles.container}>
					<h2>Utbildning</h2>
					<h3>Chalmers University of Technology</h3>
					<p>Kandidat, Teknisk Design (2018-2021)</p>
				</div>
			</div>
			<div className={styles.container} data-aos="new-animation">
				<div className={styles.emailContainer}>
					<h2>JakobKitzing@gmail.com</h2>
					<p>
						Tveka inte på att höra av dig, jag är alltid öppen för att tjöta!
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export default AboutContent;
