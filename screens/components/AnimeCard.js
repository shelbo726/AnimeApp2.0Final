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

const AnimeCard = ({ item, navigation }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate("AnimeDetailsScreen", { item })}
      >
        <Image source={{ uri: item.thumbnail, width: 80, height: 120 }} />

        <Text style={styles.cardTitle}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5FCFF",
  },
  touch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 10,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#555",
    textAlign: "center",
  },
});
export default AnimeCard;
