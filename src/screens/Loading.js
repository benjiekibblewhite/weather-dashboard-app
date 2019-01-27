import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { colors } from "../design";

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background,
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

const Loading = () => (
	<View style={styles.container}>
		<ActivityIndicator size="large" color={colors.primary} />
	</View>
);

export default Loading;
