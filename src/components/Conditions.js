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
		fontSize: 32,
		textAlign: "center"
	}
});

const Conditions = ({ icon, condition }) => (
	<View style={styles.container}>
		<Image source={{ uri: icon }} style={styles.icon} />
		<Text style={styles.text}>{condition}</Text>
	</View>
);

export default Conditions;
