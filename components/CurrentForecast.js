import React from "react";
import styled from "styled-components/native";

const CurrentForecast = ({ currentWeather, city }) => {
	return (
		<CurrentView>
			<City>{city}</City>
			<MainInfoContainer>
				<CurrentTempView>
					{currentWeather.current && (
						<WeatherIcon
							source={{
								uri: `http://openweathermap.org/img/wn/${currentWeather.current.weather[0].icon}@2x.png`,
							}}
							resizeMode={"contain"}
						/>
					)}
					<CurrentDegrees>
						{Math.round(currentWeather.current && currentWeather.current.temp)}
						°C
					</CurrentDegrees>
				</CurrentTempView>
				<Description>
					{currentWeather.current &&
						currentWeather.current.weather[0].description}
				</Description>
			</MainInfoContainer>
		</CurrentView>
	);
};

const CurrentView = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 60px;
`;

const CurrentTempView = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const MainInfoContainer = styled.View`
	display: flex;
	align-items: center;
`;

const Description = styled.Text`
	color: white;
	font-size: 15px;
	text-transform: capitalize;
`;

const WeatherIcon = styled.Image`
	width: 50px;
	height: 50px;
`;

const City = styled.Text`
	color: white;
	display: flex;
	justify-content: center;
	margin-top: 10px;
	font-size: 15px;
`;

const CurrentDegrees = styled.Text`
	color: white;
	display: flex;
	justify-content: center;
	margin-top: 10px;
	font-size: 60px;
`;

export default CurrentForecast;
