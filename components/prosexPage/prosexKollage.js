import styles from "./prosexKollage.module.css";

import Cards from "./cards";
import { Fragment } from "react";

const ProsexKollage = () => {
	return (
		<Fragment>
			<div className={styles.svgContainer}>
				<img className={styles.svg} src="/prosex/stripes-2-02.svg"></img>
			</div>
			<div className={styles.grid}>
				<div data-aos="fade-up">
					<Cards
						url="/prosex/pubrunda-karta.jpg"
						alt={"Pubrunda Chalmers Poster"}
					/>
				</div>
				<div data-aos="fade-up">
					<Cards
						url="/prosex/sommarsits.jpg"
						alt={"Sommarsittning Teknisk Design Poster"}
					/>
				</div>
				<div data-aos="fade-up">
					<Cards url="/prosex/fly-me.jpg" alt={"CM sittning Poster"} />
				</div>
				<div data-aos="fade-up">
					<Cards url="/prosex/toast-mockup.jpg" alt={"ET-raj Poster"} />
				</div>
				<div data-aos="fade-up">
					<Cards url="/prosex/under-ytan.jpg" alt={"ET-raj Poster"} />
				</div>
				<div data-aos="fade-up">
					<Cards url="/prosex/starwars.jpg" alt={"prosex."} />
				</div>
			</div>
		</Fragment>
	);
};

export default ProsexKollage;
