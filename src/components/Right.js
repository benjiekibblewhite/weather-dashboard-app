import React from "react";
import { View } from "react-native";
import Wind from "./Wind";
import { sidePanelStyle } from "../design";

const Right = ({ windDirection, windSpeed }) => (
	<View style={sidePanelStyle}>
		<Wind windSpeed={windSpeed} windDirection={windDirection} />
	</View>
);

export default Right;
