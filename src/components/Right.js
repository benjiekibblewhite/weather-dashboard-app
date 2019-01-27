import React from "react";
import { View } from "react-native";
import Wind from "./Wind";
import { sidePanelStyle } from "../design";

const Right = () => (
	<View style={sidePanelStyle}>
		<Wind windSpeed="18.36km/hr" windDirection="SSW" />
	</View>
);

export default Right;
