import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

import CurrentForecast from "../components/CurrentForecast";
import Background from "../components/Background";

import styled from "styled-components/native";
import config from "../config";

const HomeScreen = () => {
	const [city, setCity] = useState("");
	const [lat, setLat] = useState("");
	const [long, setLong] = useState();
	const [weather, setWeather] = useState({});

	const controller = new AbortController();
	const signal = controller.signal;

	const getLocation = async () => {
		// Konum iznini kontrol et
		const { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			console.error("Konum izni reddedildi.");
			return;
		}

		// Kullanıcının konumunu al
		const location = await Location.getCurrentPositionAsync({});

		// Kullanıcının konumu objesinden latitute ve longitude alınabilir
		const latitude = location.coords.latitude;
		const longitude = location.coords.longitude;

		setLat(latitude);
		setLong(longitude);
	};

	getLocation();

	//updates the weather when lat long changes
	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`,
			{ signal }
		)
			.then((res) => res.json())
			.then((data) => {
				setCity(data[0].name);
			})
			.catch((err) => {
				console.log("error", err);
			});

		fetch(
			`http://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`,
			{ signal }
		)
			.then((res) => res.json())
			.then((data) => {
				setWeather(data);
			})
			.catch((err) => {
				console.log("error", err);
			});
		return () => controller.abort();
	}, [lat, long]);

	return (
		<Container>
			<Background>
				<CurrentForecast currentWeather={weather} city={city} />
				<Main>
					<Title>GÜNLÜK KOMBİNİM</Title>
					<Combine
						source={require("../assets/combine.jpg")}
						resizeMode={"contain"}
					/>
					<Button>
						<ButtonText>Favori Kombinlerim</ButtonText>
					</Button>
				</Main>
			</Background>
		</Container>
	);
};

const Container = styled.View`
	flex: 1;
	background-color: dodgerblue;
`;

const Main = styled.View`
	flex: 1;
	background-color: #e3efff;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	padding: 30px 20px;
	margin-top: 60px;
`;

const Title = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: #245da9;
	text-align: center;
`;

const Combine = styled.Image`
	width: 100%;
	height: 75%;
`;

const ButtonText = styled.Text`
	color: white;
	font-size: 18px;
`;

const Button = styled.TouchableOpacity`
	background-color: #245da9;
	padding: 14px 10px;
	border-radius: 10px;
	margin-top: 20px;
	align-items: center;
`;

export default HomeScreen;
