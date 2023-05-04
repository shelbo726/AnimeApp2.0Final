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
import Inputs from "./components/Inputs";
import CardList from "./components/Card";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>
        <Text>Anime Genres</Text>
      </Text>
      <CardList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    justifyContent: "center",
  },
  Text: {
    color: '#333333',
    textAlign: "center",
  },
});

export default HomeScreen;
