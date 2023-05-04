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

import { GENRES } from "../../utils/animeList";

const Card = ({ item, navigation }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate("GenreScreen", { item })}
      >
        <Text style={styles.cardTitle}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const CardList = ({ navigation }) => {
  return (
    <View styles={styles.container}>
      <FlatList
        data={GENRES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <Card navigation={navigation} item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5FCFF",
  },
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#555",
    textAlign: "center",
  },
});

export default CardList;
