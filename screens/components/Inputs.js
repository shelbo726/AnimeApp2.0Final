import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Inputs = (props) => {
  return (
    // <View style={styles.inputView}>
    <TextInput
      style={styles.textInput}
      placeholder={props.placeholder}
      placeholderTextColor="#000000"
      type={props.type}
      color="black"
      secureTextEntry={props.secure}
      onChangeText={props.handler}
    />
    // </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#f7f7f8",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "400",
    color: "#333333",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    width: "80%",
  },
});

export default Inputs;
