import { useState, useEffect, Fragment } from "react";
import Typist from "react-typist";

import Typical from "react-typical";

const TextLoop = () => {
	// const [count, setCount] = useState(1);

	// useEffect(() => {
	// 	// document.title = `You clicked ${count} times`;
	// 	console.log("Count: " + count);
	// 	setCount(1);
	// }, [count]);

	return (
		<Fragment>
			<Typical
				loop={Infinity}
				wrapper="h1"
				steps={[
					"UX-Designer",
					1000,
					"UI-Designer",
					1000,
					"Product Designer",
					1000,
					"Frontend Developer",
					1000,
				]}
			/>
			{/* <p>Loop Text can be written bellow</p>
			{count ? (
				<Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
					<span> Your first text goes here</span>
					<Typist.Backspace count={20} delay={800} />
					<span> second text that replaces is here</span>
				</Typist>
			) : (
				""
			)}  */}
		</Fragment>
	);
};

export default TextLoop;
