import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Inputs from "./components/Inputs";
import { loginUser } from "../FireBase";
const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (newText) => {
    setEmail(newText);
  };

  const handlePasswordChange = (newText) => {
    setPassword(newText);
  };

  const login = async () => {
    ///read from disk drive
    ///read data from usb
    //get data or send data to web
    try {
      console.log(loginUser);
      const user = await loginUser(email, password); //10000ms
      console.log(user);
      props.navigation.navigate("HomeScreen");
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require("./assets/welcome.png")} />
      </View>
      <Inputs
        handler={handleEmailChange}
        placeholder="Enter Email"
        type="email"
      />
      <Inputs
        handler={handlePasswordChange}
        placeholder="Enter Password"
        type="password"
        secure={true}
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate("RegistrationScreen")}
      >
        <Text style={styles.forgot_button}>
          Don't Have An Account Already? Register
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.customBtnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#FFA500",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,
    marginTop: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "white",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FFA500",
  },
});

export default LoginScreen;
