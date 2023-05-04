import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import { Rating } from "react-native-elements";
import { getComments, addComment } from "../FireBase";

const AnimeDetailsScreen = ({ route, navigation }) => {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { item } = route.params;

  const handleComment = (text) => {
    setComment(text);
  };

  const handleAddComment = async () => {
    if (comment == "") return;
    await addComment(item.animeId, comment);
    setComment("");
    setComments([...comments, comment]);
  };

  const loadComments = async () => {
    try {
      const commentsArr = await getComments(item.animeId);
      setComments(commentsArr);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.bannerImage} source={{ uri: item.banner }} />

      <View style={styles.content}>
        <Text style={styles.titleText}>{item.name}</Text>

        <Text style={styles.textBox}>Description: {item.description}</Text>
        <Text style={styles.textBox}>Seasons: {item.numberOfSeasons}</Text>
        <Text style={styles.textBox}>Available on: {item.whereToWatch}</Text>
        <Text style={styles.textBox}>
          Number of Reviews: {item.numberOfReviews}
        </Text>

        <View style={styles.rating}>
          <Text style={styles.textBox}>Rating:</Text>
          <Rating
            type="star"
            readonly
            fraction={1}
            startingValue={item.rating / 2}
            imageSize={20}
          />
        </View>

        <TouchableOpacity
          style={styles.commentsButton}
          onPress={() => setShow(true)}
        >
          <Text style={styles.commentsButtonText}>Comments</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={show}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setShow(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.titleText}>Comments</Text>

            <TextInput
              style={styles.commentInput}
              placeholder="Add your comment"
              placeholderTextColor="#CCCCCC"
              value={comment}
              onChangeText={handleComment}
            />
            <TouchableOpacity
              style={[styles.button, styles.buttonAdd]}
              onPress={handleAddComment}
            >
              <Text style={styles.textStyle}>Add comment</Text>
            </TouchableOpacity>
            <ScrollView style={styles.commentsContainer}>
              {comments.map((item, index) => (
                <Text
                  key={index}
                  style={{
                    ...styles.commentText,
                    borderTopWidth: index > 0 ? 1 : 0,
                    borderColor: "black",
                  }}
                >
                  {item}
                </Text>
              ))}
            </ScrollView>

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShow(false)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default AnimeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  bannerImage: {
    width: "100%",
    height: 130,
  },
  content: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textBox: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333333",
    paddingVertical: 5,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  commentsButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  commentsButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  commentInput: {
    backgroundColor: "#F4F4F4",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "400",
    alignSelf: "stretch",
    color: "#333333",
  },
  commentsContainer: {
    alignSelf: "stretch",
    maxHeight: "50%",
    marginVertical: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
  },
  commentText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333333",
    paddingVertical: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#FFA500",
  },
  buttonAdd: {
    width: "80%",
    backgroundColor: "#FFFF00",
  },
  textStyle: {
    color: "#333333",
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "stretch",
  },
});
