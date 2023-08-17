import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzuWKyGYwKfYp4C7iyHxu0sy46Dsoywo0",
    authDomain: "olx-31257.firebaseapp.com",
    projectId: "olx-31257",
    storageBucket: "olx-31257.appspot.com",
    messagingSenderId: "465070025856",
    appId: "1:465070025856:web:1ab233b1e0b0079c6d4a65",
    measurementId: "G-EPFG246HMN"
  };

export default firebase.initializeApp(firebaseConfig);