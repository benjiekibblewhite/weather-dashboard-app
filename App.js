import { Font, KeepAwake } from "expo";
import { StyleSheet, View } from "react-native";
import { branch, compose, lifecycle, mapProps, renderComponent, withState } from "recompose";

import Center from "./src/components/Center";
import Left from "./src/components/Left";
import Loading from "./src/screens/Loading";
import React from "react";
import Right from "./src/components/Right";
import { StatusBar } from "react-native";
import { colors } from "./src/design";
import fetchHoc from "fetch-hoc";

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

const getData = () =>
	fetch("https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&units=metric&appid=1aecf5a25c8f28e42889cde41943081b")
		.then(res => res.json())
		.then(res => res)
		.catch(err => console.error(err));

export default compose(
	withState("fontLoaded", "setFontLoaded", false),
	withState("data", "setData", null),
	lifecycle({
		async componentDidMount() {
			StatusBar.setHidden(true);
			KeepAwake.activate();
			await Font.loadAsync({
				"Lato-Light": require("./assets/fonts/Lato-Light.ttf")
			});
			this.props.setFontLoaded(true);
			this.props.setData(await getData());
			setInterval(async () => {
				this.props.setData(await getData());
			}, 30 * 60000); // refetch every 30 minutes
		}
	}),
	branch(({ fontLoaded, data }) => !fontLoaded || !data, renderComponent(Loading)),
	mapProps(({ data }) =>
		data
			? {
					left: {
						condition: data.weather[0].description,
						icon: data.weather[0].icon
					},
					center: {
						temp: data.main.temp.toFixed(0),
						highTemp: data.main.temp_max,
						lowTemp: data.main.temp_min
					},
					right: {
						windSpeed: (data.wind.speed * 3.6).toFixed(0),
						windDirection: data.wind.deg
					}
			  }
			: {
					data: null
			  }
	)
)(App);
