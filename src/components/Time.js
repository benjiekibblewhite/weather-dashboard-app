import React, { Component } from "react";
import { StyleSheet } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
	time: {
		fontSize: 24
	}
});

export default class Time extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date()
		};
	}
	componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	tick() {
		this.setState({
			time: new Date()
		});
	}

	render() {
		return (
			<Text style={styles.time}>
				{this.state.time.getHours()}:{("0" + this.state.time.getMinutes()).slice(-2)}
			</Text>
		);
	}
}
