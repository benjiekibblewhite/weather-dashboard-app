import { StyleSheet, View } from "react-native";
import { branch, compose, lifecycle, mapProps, renderComponent, withState } from "recompose";

import Center from "./src/components/Center";
import { Font } from "expo";
import Left from "./src/components/Left";
import Loading from "./src/screens/Loading";
import React from "react";
import Right from "./src/components/Right";
import { colors } from "./src/design";
import fetch from "fetch-hoc";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "center"
	}
});

const App = ({ center, left, right }) => (
	<View style={styles.container}>
		<Left {...left} />
		<Center {...center} />
		<Right {...right} />
	</View>
);

export default compose(
	fetch("https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&units=metric&appid=1aecf5a25c8f28e42889cde41943081b"),
	withState("fontLoaded", "setFontLoaded", false),
	lifecycle({
		async componentDidMount() {
			await Font.loadAsync({
				"Lato-Light": require("./assets/fonts/Lato-Light.ttf")
			});

			this.props.setFontLoaded(true);
		}
	}),
	branch(({ fontLoaded, loading }) => !fontLoaded || loading, renderComponent(Loading)),
	mapProps(({ data }) =>
		data
			? {
					left: {
						condition: data.weather[0].description,
						icon: data.weather[0].icon
					},
					center: {
						temp: data.main.temp,
						highTemp: data.main.temp_max,
						lowTemp: data.main.temp_min
					},
					right: {
						windSpeed: data.wind.speed * 3.6,
						windDirection: data.wind.deg
					}
			  }
			: {
					data: null
			  }
	)
)(App);
