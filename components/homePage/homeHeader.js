import { Fragment } from "react";
import Link from "next/dist/client/link";

import styles from "./homeHeader.module.css";
import Navigation from "../Layout/Navigation";
import TextLoop from "../UI/textLoop";
import BlobBackground from "../UI/blobBackground";
import styled from "@emotion/styled";

const text = "UX/UI.";

const HomeHeader = () => {
	const Container = styled.div`
		height: 100vh;
		width: 80vw;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`;
	const HeaderElement = styled.div`
		display: flex;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
	`;

	const HeaderText = styled.div`
		width: 80%;
		& > p {
			line-height: 1.6;
			width: 90%;
			margin-bottom: 4.8rem;
			margin-top: 3.2rem;
		}
		& > h1 {
			font-size: 5.2rem;
		}
	`;

	return (
		<div>
			<Container>
				<HeaderElement>
					<HeaderText>
						<h1>Jakob Kitzing</h1>

						<TextLoop />

						<p>
							Jag är en produktdesigner med huvudfokus på digitala produkter och
							UX/UI. Min filosofi och det jag genuint brinner för är att
							utveckla kreativa produkter och tjänster där användaren alltid
							står i centrum.
						</p>
						<Link href="/about">
							<a className={styles.btn}>Mer om mig</a>
						</Link>
					</HeaderText>
					<div className={styles.headerImg}>
						<BlobBackground />
					</div>
				</HeaderElement>
			</Container>
		</div>
	);
};

export default HomeHeader;
