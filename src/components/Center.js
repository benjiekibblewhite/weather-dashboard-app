import { StyleSheet, View } from "react-native";

import CurrentTemp from "./CurrentTemp";
import HighLow from "./HighLow";
import React from "react";
import Text from "./Text";
import Time from "./Time";
import { distances } from "../design";

const styles = StyleSheet.create({
	container: {
		flex: 1.5,
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: distances.gap
	}
});

const Center = ({ temp, highTemp, lowTemp }) => (
	<View style={styles.container}>
		<CurrentTemp temp={temp} />
		<HighLow highTemp={highTemp} lowTemp={lowTemp} />
		<Time />
	</View>
);

export default Center;
