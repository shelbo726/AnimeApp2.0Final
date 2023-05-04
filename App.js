import React from "react";

// import things related to React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import screens
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import HomeScreen from "./screens/HomeScreen";
import AnimeDetailsScreen from "./screens/AnimeDetailsScreen";
import { View, StyleSheet, Text, Button, Icon } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import GenreScreen from "./screens/GenreScreen";
import { GENRES } from "./utils/animeList";
// create a "stack"
const MyStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LogOut = ({ navigation }) => (
  <Button title="Log Out" onPress={navigation.navigate("WelcomeBack")} />
);

const MainView = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="GenreScreen"
        component={GenreScreen}
        initialParams={{ item: GENRES[0] }}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AnimeDetailsScreen"
        component={AnimeDetailsScreen}
        initialParams={{ item: GENRES[0].animes[0] }}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Logout" component={LogOut} />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer styles={styles.Font}>
      <MyStack.Navigator>
        <MyStack.Screen
          name="WelcomeBack"
          options={{ headerShown: false }}
          component={SplashScreen}
        />
        <MyStack.Screen
          name="LoginScreen"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <MyStack.Screen
          name="RegistrationScreen"
          options={{ headerShown: false }}
          component={RegistrationScreen}
        />
        <MyStack.Screen
          name="MainView"
          options={{ headerShown: false }}
          component={MainView}
        />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Font: {
    fontFamily: "sans-serif",
    flex: 1,
    position: "relative",
    top: 50,
  },
});

export default App;
