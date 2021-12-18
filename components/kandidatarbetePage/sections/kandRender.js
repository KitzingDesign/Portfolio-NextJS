import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const KandRender = (props) => {
	return (
		<Zoom>
			<img
				src={`/Kandidat/solutions/${props.url}.jpg`}
				style={{
					border: "white solid 2rem",
					width: "100%",
					boxShadow:
						"  rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
				}}
				alt={props.alt}
			/>
		</Zoom>
	);
};

export default KandRender;
