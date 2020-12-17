import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBq2pE_M7RKm1BMjTos05xwNd4UsCIgJmo",
    authDomain: "testproject1-148d1.firebaseapp.com",
    databaseURL: "https://testproject1-148d1.firebaseio.com",
    projectId: "testproject1-148d1",
    storageBucket: "testproject1-148d1.appspot.com",
    messagingSenderId: "681516341037",
    appId: "1:681516341037:web:665edaca61fe7d07fe25a4"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();