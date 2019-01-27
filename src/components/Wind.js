import { Image, StyleSheet, View } from "react-native";

import React from "react";
import Text from "./Text";
import { distances } from "../design";

const styles = StyleSheet.create({
	container: {
		alignItems: "center"
	},
	icon: {
		height: distances.icon,
		width: distances.icon
	},
	text: {
		fontSize: 32
	}
});

const Conditions = ({ icon, windSpeed, windDirection }) => (
	<View style={styles.container}>
		<Image source={require("../../assets/wind.png")} style={styles.icon} />
		<Text style={styles.text}>{windSpeed}</Text>
		<Text style={styles.text}>{windDirection}</Text>
	</View>
);

export default Conditions;
