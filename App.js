import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GalleryScreen from "./screens/GalleryScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";

const App = () => {
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					tabBarLabelStyle: {
						backgroundColor: "#e3efff",
						fontWeight: "700",
						borderTopWidth: 3,
						fontSize: 16,
						marginBottom: 8,
					},
					headerShown: false,
					tabBarStyle: {
						backgroundColor: "#e3efff",
					},
					tabBarIconStyle: { display: "none" },
				}}
			>
				<Tab.Screen name="Galeri" component={GalleryScreen} />
				<Tab.Screen name="Kombin Değiştir" component={HomeScreen} />
				<Tab.Screen name="Ayarlar" component={SettingScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
