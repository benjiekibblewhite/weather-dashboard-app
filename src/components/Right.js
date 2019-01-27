import React from "react";
import { View } from "react-native";

import { sidePanelStyle } from "../design";
import Wind from "./Wind";

const Right = ({ windDirection, windSpeed }) => (
	<View style={sidePanelStyle}>
		<Wind windSpeed={windSpeed} windDirection={windDirection} />
	</View>
);

export default Right;
