import React from "react";
import { ImageBackground } from "react-native";
import bgImg from "../assets/bg.png";

const Background = (props) => {
	return (
		<ImageBackground source={bgImg} style={{ width: "100%", height: "100%" }}>
			{props.children}
		</ImageBackground>
	);
};

export default Background;
