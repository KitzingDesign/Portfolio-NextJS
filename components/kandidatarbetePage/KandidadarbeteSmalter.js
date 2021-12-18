import styles from "./kandidatarbeteSmalter.module.css";

const KandidatarbeteBakgrund = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textConatiner} data-aos="fade-up">
				<h2>Utvärdering</h2>
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur,
				</p>
			</div>
			<div className={styles.imgContainer} data-aos="fade-up">
				<img
					className={styles.gifContainer}
					src={`Smalter-gif-smal.gif`}
					alt="Time Line"
				/>
			</div>
		</div>
	);
};

export default KandidatarbeteBakgrund;
