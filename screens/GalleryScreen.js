import React from "react";
import styled from "styled-components/native";
import Background from "../components/Background";

const GalleryScreen = () => {
	return (
		<Container>
			<Background>
				<Main>
					<Title>Galeri</Title>
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

export default GalleryScreen;
