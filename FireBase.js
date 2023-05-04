// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  getDoc,
  query,
  where,
  doc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBL4cKK359H9Lfx7f-Yg5oHCqCwWsFDSw",
  authDomain: "animeapp2-c2723.firebaseapp.com",
  projectId: "animeapp2-c2723",
  storageBucket: "animeapp2-c2723.appspot.com",
  messagingSenderId: "436311200383",
  appId: "1:436311200383:web:0ba8ac3c08e42ad08ba54a",
  measurementId: "G-H4HMV8PMMJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const createUser = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const loginUser = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getComments = async (animeId) => {
  try {
    const q = collection(db, "Animes");
    const docs = await getDocs(q);
    console.log("firebase")
    let document
    docs.forEach(doc=>{
     if(doc.data().id==animeId){
      document=doc
     }
      
    })
    console.log(document)
    console.log(document.data())
    return document.data().comments
    
    } catch (e) {
    throw new Error(e.message);
  }
};


export const addComment = async (animeId,newComment) => {
  try {
    const q = collection(db, "Animes");
    const docs = await getDocs(q);
    console.log("firebase")
    let document
    docs.forEach(doc=>{
     if(doc.data().id==animeId){
      document=doc
     }
      
    })
    console.log(document)
    console.log(document.data())
    let data=document.data()
    let commentsArr=[...data.comments,newComment]

    let newDocument={...data,comments:commentsArr}
    
await setDoc(document.ref,newDocument)

    

    
    
    } catch (e) {
    throw new Error(e.message);
  }
};
