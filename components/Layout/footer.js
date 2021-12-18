import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>
					Portfolio <br /> Jakob Kitzing
				</h2>
				<div className={styles.links}>
					<Link href="/">
						<p>Projects</p>
					</Link>
					<Link href="/about">
						<p>About</p>
					</Link>
				</div>
				<div className={styles.email}>
					<p>
						Contact: <br />
						Jakob.Kitzing@gmail.com
					</p>
				</div>
				<div className={styles.socialMedia}>
					<Link href="https://se.linkedin.com/in/jakob-kitzing-27b4991b7">
						<a target="_blank">
							<img
								className={styles.social}
								src="/footer/linkedin.svg"
								alt="LinkdIn logo"
							/>
						</a>
					</Link>
					<Link href="https://www.instagram.com/jakobkitzing/?hl=en">
						<a target="_blank">
							<img
								className={styles.social}
								src="/footer/instagram.svg"
								alt="Intagram logo"
							/>
						</a>
					</Link>
				</div>
			</div>
			<p className={styles.copyRight}>
				This portfolio was created with React/Next.js
				<br />© 2021 Jakob Kitzing
			</p>
		</div>
	);
};
export default Footer;
