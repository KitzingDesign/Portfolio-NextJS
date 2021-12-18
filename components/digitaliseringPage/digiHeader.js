import { Fragment } from "react";
import styles from "./digiHeader.module.css";
import {
	HeartIcon,
	ChatIcon,
	PaperAirplaneIcon,
	BookmarkIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Navigation]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwipeArrow from "../UI/swipe-arrow";

const DigiHeader = () => {
	return (
		<div className={styles.upperContainer}>
			<div className={styles.kryImg}>
				<div className={styles.kryImgContainer}>
					<img className={styles.phone} src="/Phone.png" />

					<div className={styles.swipes}>
						<Swiper
							id="swiper-color"
							slidesPerView={1}
							spaceBetween={0}
							loop={true}
							style={{ width: "100%", height: "100%" }}
						>
							<SwiperSlide>
								<div className={styles.swipe}>
									<div className={styles.firstSlide}>
										<div className={styles.whiteSide}>
											<div className={styles.oCircle}></div>
											<div className={styles.leftArrow}>
												<SwipeArrow />
											</div>
										</div>
										<div className={styles.orangeSide}>
											<div className={styles.wCircle}></div>
											<div className={styles.rightArrow}>
												<SwipeArrow />
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.swipe}>
									<div className={styles.secondSlide}>
										<div className={styles.profileInfo}>
											<img src="/Startbild.svg" alt="Time Line" />
											<p>
												<b>JakobKitzingDesign</b> <br /> sponsored
											</p>
										</div>
										<div className={styles.swiperImg}>
											<Swiper
												id="swiper-color"
												slidesPerView={1}
												spaceBetween={0}
												pagination={{
													clickable: false,
												}}
												loop={true}
												style={{ width: "100%", height: "100%" }}
											>
												<SwiperSlide>
													<div className={styles.imgContainer}>
														<Image
															width={1000}
															height={600}
															src="/kry-stor/eldler-stor.jpg"
															alt="Time Line"
														/>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className={styles.imgContainer}>
														<Image
															width={700}
															height={500}
															src="/kry-stor/ely-stor.jpg"
															alt="Ely comercial"
														/>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className={styles.imgContainer}>
														<Image
															width={1000}
															height={560}
															src="/kry-stor/jury-stor.jpg"
															alt="Time Line"
														/>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className={styles.imgContainer}>
														<Image
															width={1000}
															height={600}
															src="/kry-stor/gyno-stor.jpg"
															alt="Time Line"
														/>
													</div>
												</SwiperSlide>
											</Swiper>
										</div>
										<div className={styles.iconer}>
											<div>
												<HeartIcon className={styles.icon} />
												<ChatIcon className={styles.icon} />
												<PaperAirplaneIcon className={styles.icon} />
											</div>
											<BookmarkIcon className={styles.icon} />
										</div>
										<p className={styles.likesText}>
											<b>4m likes</b> <br /> Häng med in i framtiden, alla appar
											går att finna på JakobKitzingDesign.com
										</p>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>

			<div className={styles.textContainer}>
				<h2 className={(styles.text, styles.W)}>SWI</h2>
				<h2 className={(styles.text, styles.O)}>PE</h2>
			</div>
			<div className={styles.container}>
				<div className={styles.whiteSide}></div>
				<div className={styles.orangeSide}></div>
			</div>
		</div>
	);
};

export default DigiHeader;
