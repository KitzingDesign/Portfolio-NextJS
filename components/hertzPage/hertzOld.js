import styles from "./hertzOld.module.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Navigation]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { style } from "dom-helpers";

const HertzOld = () => {
	return (
		<div className={styles.container}>
			<div>
				<h2 data-aos="fade-up">Befintlig Hemsida</h2>
				<p data-aos="fade-up">
					En teoretisk utvärdering av den befintliga hemsidan skapades för att
					för att konkretisera eventuella problem med hemsidan. Det främsta som
					framkom var att hemsidan i vissa fall var svår att förstå, den bestod
					av mycket information som inte ledde användaren framåt i processen,
					utan snarare gjorde användaren förvirrad. Utifrån den problembilden
					som skapats gjordes en prototyp av den befintliga hemsidan i adobe XD
					för att kunna få en jämförbar utvärdering med framtida prototyp för en
					redesign.
				</p>
			</div>
			<div className={styles.swiperContainer} data-aos="fade-up">
				<Swiper
					id="swiper-color"
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					className={styles.swiperButtonNext}
				>
					<SwiperSlide>
						<div>
							<img
								className={styles.imgContainer}
								src="/Car-rental/HertzOld-1.png"
								alt="Homepage Old Site"
							/>
							<p className={styles.descriptionImg}>Startsida</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className={styles.imgContainer}
							src="/Car-rental/HertzOld-2.png"
							alt="Rentalpage Old Site"
						/>
						<p className={styles.descriptionImg}>
							Uppgifter gällande utrhyrningen
						</p>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className={styles.imgContainer}
							src="/Car-rental/HertzOld-3.png"
							alt="Choose Car Page Old Site"
						/>
						<p className={styles.descriptionImg}>Val av Bil</p>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className={styles.imgContainer}
							src="/Car-rental/HertzOld-4.png"
							alt="Payment Page Old Site"
						/>
						<p className={styles.descriptionImg}>Betalningsinfromation</p>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};
export default HertzOld;
