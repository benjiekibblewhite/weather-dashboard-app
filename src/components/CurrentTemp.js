import { StyleSheet, View } from "react-native";

import React from "react";
import Text from "./Text";
import { distances } from "../design";

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center"
	},
	text: {
		fontSize: 96
	}
});

const CurrentTemp = ({ temp }) => (
	<View style={styles.container}>
		<Text style={styles.text}>{temp}°</Text>
	</View>
);

export default CurrentTemp;
