import React from "react";
import { StyleSheet, View } from "react-native";

import { distances } from "../design";
import Text from "./Text";

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
