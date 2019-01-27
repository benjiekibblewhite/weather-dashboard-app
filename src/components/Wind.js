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

const Wind = ({ icon, windSpeed, windDirection }) => {
	let direction = "N";
	if (windDirection >= 11.25 && windDirection < 33.75) direction = "NNE";
	if (windDirection >= 33.75 && windDirection < 56.25) direction = "NE";
	if (windDirection >= 56.25 && windDirection < 78.75) direction = "ENE";
	if (windDirection >= 78.25 && windDirection < 101.25) direction = "E";
	if (windDirection >= 101.25 && windDirection < 123.75) direction = "ESE";
	if (windDirection >= 123.75 && windDirection < 146.25) direction = "SE";
	if (windDirection >= 146.25 && windDirection < 168.75) direction = "SSE";
	if (windDirection >= 168.75 && windDirection < 191.25) direction = "S";
	if (windDirection >= 191.25 && windDirection < 213.75) direction = "SSW";
	if (windDirection >= 213.75 && windDirection < 236.25) direction = "SW";
	if (windDirection >= 236.25 && windDirection < 258.75) direction = "WSW";
	if (windDirection >= 258.75 && windDirection < 281.25) direction = "W";
	if (windDirection >= 281.25 && windDirection < 303.75) direction = "WNW";
	if (windDirection >= 303.75 && windDirection < 326.25) direction = "NW";
	if (windDirection >= 326.25 && windDirection < 348.75) direction = "NNW";
	return (
		<View style={styles.container}>
			<Image source={require("../../assets/wind.png")} style={styles.icon} />
			<Text style={styles.text}>
				{windSpeed} km/h {direction}
			</Text>
		</View>
	);
};

export default Wind;
