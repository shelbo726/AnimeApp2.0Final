import React, { Component, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import Inputs from "./components/Inputs";
import { createUser } from "../FireBase";
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (text) => {
    setEmail(text);
  };
  const handlePassword = (text) => {
    ///text=new text after the text change
    setPassword(text);
  };
  const handleConfirmPassword = (text) => {
    setConfirmPassword(text);
  };
  const login = async () => {
    if (password != confirmPassword) {
      alert("Passwords do not match. Try Again!");
      return;
    }
    if (password.length < 8 || password.length > 28) {
      alert("Password length should be between 8-28 characters");
      return;
    }
    try {
      const user = await createUser(email, password);
      console.log("loggin in ");
      props.navigation.navigate("HomeScreen");
    } catch (err) {
      alert(err.message);
      console.log("error happened");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <Image source={require("./assets/join.png")} />
      </View>
      <Inputs placeholder="Enter Email" type="email" handler={handleEmail} />

      <Inputs
        placeholder="Password"
        type="password"
        secure={true}
        handler={handlePassword}
      />

      <Inputs
        placeholder="Confirm Password"
        type="password"
        secure={true}
        handler={handleConfirmPassword}
      />

      <TouchableOpacity style={styles.submitButton} onPress={login}>
        <Text style={styles.submitButtonText}> Register </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    //  paddingTop: 500,
    backgroundColor: "#000000",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    justifyContent: "center",
  },
  //   input: {
  //     margin: 15,
  //     height: 40,
  //     borderColor: "#FFA500",
  //     borderWidth: 1,
  //   },
  submitButton: {
    width: "50%",
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    marginTop: 10,
    backgroundColor: "#FFA500",
  },
  submitButtonText: {
    color: "black",
  },
});
