import React from "react";

// import things related to React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import HomeScreen from "./screens/HomeScreen";
import AnimeDetailsScreen from "./screens/AnimeDetailsScreen";
import { View, StyleSheet } from "react-native";
import GenreScreen from "./screens/GenreScreen";

// create a "stack"
const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer styles={styles.Font}>
      <MyStack.Navigator>
        <MyStack.Screen
          name="Welcome Back"
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
          name="HomeScreen"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <MyStack.Screen
          name="AnimeDetailsScreen"
          options={{ headerShown: false }}
          component={AnimeDetailsScreen}
        />

        <MyStack.Screen
          name="GenreScreen"
          options={{ headerShown: false }}
          component={GenreScreen}
        />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Font: {
    fontFamily: "sans-serif",
  },
});

export default App;
