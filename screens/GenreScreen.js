import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Inputs from "./components/Inputs";
import AnimeCard from "./components/AnimeCard";

const GenreScreen = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>
        <Text>{item.name}</Text>
      </Text>
      <FlatList
        data={item.animes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <AnimeCard navigation={navigation} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#000000",
    justifyContent: "center",
    paddingTop: 50,
  },
  Text: {
    fontSize: 30,
    fontFamily: "Arial",
    color: "white",
    textAlign: "center",
  },
});

export default GenreScreen;
