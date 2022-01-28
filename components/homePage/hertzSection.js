import ProjectLink from "../UI/Project-link";
import Image from "next/image";

import styles from "./hertzSection.module.css";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useState } from "react";

// import produktImg from "public/static/Macbook-mockup-hertz.jpg";
// const TextAnimation = keyframes`
// 	from {
// 		opacity: 0;
// 		transform: translate(0, 100vh);
// 	}
// 	to {
// 		opacity: 1;
// 		transform: translate(0, 0);
// 	}`;

const TextContainer = styled.div`
	width: 40vw;
`;
const ImgContainer = styled.div`
	width: 40vw;
`;
const Text = styled.p`
	margin-top: 2.4rem;
	margin-bottom: 2.4rem;
`;
const stay = false;

const HertzSection = (props) => {
	if (props.fade) {
		stay = true;
	}
	return (
		<div className={styles.container} id="Hertz">
			<div
				className={
					stay
						? `${styles.contentText} ${styles.visableText}`
						: styles.contentText
				}
			>
				<TextContainer>
					<h2>Biluthyrning</h2>
					<Text>
						Att känna frustration när man ska använda en hemsida är något som
						kan skapa en negativ bild av hela varumärket. Jag och några kursare
						hade som arbete att förbättra en biluthyrningshemsida ur ett
						usability perspektiv, för att just slippa denna frustration.
					</Text>
					<ProjectLink link="/Biluthyrning" />
				</TextContainer>
			</div>

			<div
				className={
					stay ? `${styles.contentImg} ${styles.visableImg}` : styles.contentImg
				}
			>
				<ImgContainer>
					<Image
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="contain"
						src="/Macbook-mockup-hertz.png"
						alt="Mockup Car Rental webpage"
					/>
				</ImgContainer>
			</div>
		</div>
	);
};

export default HertzSection;
