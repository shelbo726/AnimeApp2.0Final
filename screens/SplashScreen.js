import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const SplashScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/Logo.png")} style={styles.image} />
      <Text style={styles.h1}>Review With Friends</Text>
      <Text style={styles.h2}>
        Join your friends on reviewing your favorite Animes! Create an account
        and get started!
      </Text>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => props.navigation.navigate("LoginScreen")}
        >
          <Text style={styles.customBtnText}>Press Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    width: "100%",
  },
  h1: {
    color: "#333333",
    fontSize: 30,
    marginTop: 100,
  },
  h2: {
    color: "grey",
    textAlign: "center",
    marginTop: 30,
    fontSize: 15,
    width: 300,
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    marginTop: 70,
  },
  bottomContainer: {
    justifyContent: "center",
    width: "90%",
    marginTop: 50,
    padding: 10,
  },
  customBtnBG: {
    backgroundColor: "#FFA500",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },

  customBtnText: {
    fontSize: 40,
  },
});

export default SplashScreen;
