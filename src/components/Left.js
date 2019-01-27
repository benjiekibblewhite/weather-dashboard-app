import React from "react";
import { StyleSheet, View } from "react-native";

import { distances, sidePanelStyle } from "../design";
import Conditions from "./Conditions";

const styles = StyleSheet.create({
	container: {
		...sidePanelStyle
	}
});

const Left = ({ condition, icon }) => (
	<View style={sidePanelStyle}>
		<Conditions icon={`http://openweathermap.org/img/w/${icon}.png`} condition={condition} />
	</View>
);

export default Left;
