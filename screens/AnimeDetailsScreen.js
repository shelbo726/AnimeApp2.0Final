import React from "react";
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
} from "react-native";
import Inputs from "./components/Inputs";
import CardList from "./components/Card";
import { Rating, AirbnbRating } from "react-native-elements";
import { useState,useEffect } from "react";
import { getComments,addComment } from "../FireBase";
const AnimeDetailsScreen = ({ route, navigation }) => {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  const  [comments,setComments]=useState([])
  const { item } = route.params;


  const handleComment = (text) => {
    setComment(text);
  };
  const handleAddComment=async()=>{

    if(comment=="") return;
    await addComment(item.animeId,comment)
    setComments([...comments,comment])
  }
  const loadComments=async()=>{
    try{

    const commentsArr= await getComments(item.animeId)
      setComments(commentsArr)
     
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
   loadComments()


  },[])

  return (
    <View style={styles.container}>
      <Modal
     statusBarTranslucent={true}
        nta="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          alert("Modal has been closed.");
          setShow(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <TextInput
              style={{textAlign:"center"}}
                placeholder={"Add your comment"}
                placeholderTextColor="#000000"
                type="text"
                color="black"
                onChangeText={handleComment}
              />
              <Button onPress={handleAddComment} title="Add comment" color="black" />
            </View>

             {comments&& comments.map(item=>{
              return <Text style={{textAlign:"left",padding:2}}>{item}</Text>
             })}

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShow(false)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Image
        style={{ width: "100%", height: 130 }}
        source={{ uri: item.banner }}
      />
      <Text style={{ fontSize: 25, textAlign: "left", color: "white" }}>
        {item.name}
      </Text>

      <View style={styles.content}>
        <Text style={styles.textBox}>Description: {item.description}</Text>
        <Text style={styles.textBox}>Seasons: {item.numberOfSeasons}</Text>
        <Text style={styles.textBox}>Available on: {item.whereToWatch}</Text>
        <Text style={styles.textBox}>Rating: {item.rating}</Text>
        <Text style={styles.textBox}>
          Number of Reviews: {item.numberOfReviews}
        </Text>
      </View>

      <View>
        <Button
          onPress={() => {
            setShow(true);
          }}
          title="Comments"
          color="rgb(100,200,150)"
        />
      </View>

      {/* <Rating
        type="star"
        maxStars={5}
        rating={3}
        defaultRating={3}
        imageSize={60}
        onFinishRating={() => {}}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(8, 18, 34);",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 80,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 3,
    borderColor: "white",
    borderWidth: 2,
    borderRAdius: 5,
  },
  Text: {
    color: "white",
    textAlign: "left",
  },
  textBox: {
    color: "white",
    padding: 4,
    textAlign: "left",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
   
  },
  modalView: {
    margin: 1,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default AnimeDetailsScreen;
