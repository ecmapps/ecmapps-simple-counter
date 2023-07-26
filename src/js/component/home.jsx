import React from "react";
import SecondsCounter from "./seconds-counter";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center">
			<SecondsCounter />
		</div>
	);
};

export default Home;
