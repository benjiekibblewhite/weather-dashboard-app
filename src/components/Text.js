import React from "react";
import { Text as RNText, StyleSheet } from "react-native";

import { colors } from "../design";

const styles = StyleSheet.create({
	default: {
		fontFamily: "Lato-Light",
		color: colors.primary
	}
});

const Text = ({ style, children, ...props }) => (
	<RNText style={[styles.default, style]} {...props}>
		{children}
	</RNText>
);

export default Text;
