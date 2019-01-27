import { StyleSheet, View } from "react-native";

import React from "react";
import Text from "./Text";
import { distances } from "../design";

const styles = StyleSheet.create({
	container: {
		marginBottom: distances.gap
	},
	temp: {
		fontSize: 40
	}
});

const HighLow = ({ highTemp, lowTemp }) => (
	<View style={styles.container}>
		<Text style={styles.temp}>high of {highTemp}°</Text>
		<Text style={styles.temp}>low of {lowTemp}°</Text>
	</View>
);

export default HighLow;
