import styles from "./kandidatarbeteSection.module.css";
import ProjectLink from "../UI/Project-link";
import Image from "next/image";
import styled from "@emotion/styled";

// import produktImg from "public/static/herobild.png";
const stay = false;

const TextContainer = styled.div`
	width: 40vw;
`;
const ImgContainer = styled.div`
	width: 40vw;
`;

const KandidatarbeteSection = (props) => {
	if (props.fade) {
		stay = true;
	}
	return (
		<div className={styles.container} id="Kandidat">
			<div className={`${styles.contentImg} ${styles.visableImg}`} id="Bild">
				<ImgContainer>
					<Image
						width={1000}
						height={1000}
						src="/herobild.png"
						alt="kandidatarbete"
					/>
				</ImgContainer>
			</div>
			<div className={`${styles.contentText} ${styles.visableText}`} id="Text">
				<TextContainer>
					<h2>Kandidatarbete</h2>
					<p className={styles.text}>
						Som kandidatarbete fick min grupp som uppdrag tillsammans med
						designföretaget Boid att utveckla framtidens kontrollrum åt
						legeringsverket Vagrön Alloys. Vår del i arbetet var att framställa
						den nya arbetsplatsen till personen som styr ugnarna.
					</p>
				</TextContainer>
				<ProjectLink
					link="kandidatarbete-page"
					alt="Prototype Kandidatarbete"
				/>
			</div>
		</div>
	);
};

export default KandidatarbeteSection;
