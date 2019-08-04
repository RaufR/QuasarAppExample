import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
let config = {
  apiKey: '',
  authDomain: "",
  databaseURL: '',
  projectId: "",
  storageBucket: '',
  messagingSenderId: ""
};
firebase.initializeApp(config);

export const db = firebase.firestore();
export const fireAuth = firebase.auth();
export const fireBase = firebase;
