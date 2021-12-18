import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuOutline, CloseOutline } from "react-ionicons";

import styles from "./Navigation.module.css";

const Nav = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menu, setMenu] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;

		if (offset > 300) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};
	useEffect(() => {
		const path = window.location.href;
		const lastOfPath = path.substr(path.lastIndexOf("/") + 1);
		if ((lastOfPath = "about")) {
			console.log(lastOfPath);
		}
		window.addEventListener("scroll", handleScroll);
	}, []);

	const handleMenu = () => {
		if (!menu) {
			setMenu(true);
		} else if (menu) {
			setMenu(false);
		}
	};
	return (
		<nav className={scrolled ? styles.sticky : styles.unSticky}>
			<div className={styles.container}>
				<Link href="/">
					<img
						src="/Nav-logo.svg"
						className={
							menu
								? `${styles.containerAnimationIn} `
								: `${styles.containerAnimationOut} `
						}
					/>
				</Link>
				<nav
					className={
						menu
							? `${styles.mainNav} ${styles.navVisible}`
							: `${styles.mainNav} ${styles.navInvisible}`
					}
				>
					<ul>
						<Link href="/">
							<p className={styles.link} onClick={() => handleMenu()}>
								PROJECTS
							</p>
						</Link>
						<Link href="/about">
							<p className={styles.link} onClick={() => handleMenu()}>
								ABOUT
							</p>
						</Link>
					</ul>
				</nav>
				<div className={styles.mobileNav}>
					<MenuOutline
						name="menu"
						color={"#00000"}
						height="4.8rem"
						width="4.8rem"
						onClick={() => handleMenu()}
						className={menu ? `${styles.mobileNavMenu}` : null}
					/>
					<CloseOutline
						name="close"
						color={"#00000"}
						height="4.8rem"
						width="4.8rem"
						onClick={() => handleMenu()}
						className={menu ? null : `${styles.mobileNavMenu} `}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Nav;