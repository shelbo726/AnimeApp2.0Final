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
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder={props.placeholder}
        placeholderTextColor="#000000"
        type={props.type}
        color="black"
        secureTextEntry={props.secure}
        onChangeText={props.handler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "#FFA500",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 5,
    marginTop: 5,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
});

export default Inputs;
