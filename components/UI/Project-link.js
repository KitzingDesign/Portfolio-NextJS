import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

import styles from "./Project-link.module.css";

const ProjectLink = (props) => {
	return (
		<div className={styles.container}>
			<Link href={props.link} passHref={true}>
				<div className={styles.projectLink}>
					<p>Utforska Projektet</p> <ArrowRightIcon className={styles.icon} />
				</div>
			</Link>
		</div>
	);
};

export default ProjectLink;
