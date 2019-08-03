import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
let config = {
  apiKey: "AIzaSyBBYeektxnI3SR8Xra3SNihtMD5iZP4iCM",
  authDomain: "uddok-532a5.firebaseapp.com",
  databaseURL: "https://uddok-532a5.firebaseio.com",
  projectId: "uddok-532a5",
  storageBucket: "uddok-532a5.appspot.com",
  messagingSenderId: "28546463605"
};
firebase.initializeApp(config);

export const db = firebase.firestore();
export const fireAuth = firebase.auth();
export const fireBase = firebase;
