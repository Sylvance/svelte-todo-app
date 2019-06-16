import firebase from 'firebase/app';// rollup bundle issue with ESM import
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyBYBuL8GYXhBt7EmRDnhgbxKCcbz63YMzU",
  authDomain: "vanofolio.firebaseapp.com",
  databaseURL: "https://vanofolio.firebaseio.com",
  projectId: "vanofolio",
  storageBucket: "vanofolio.appspot.com",
  messagingSenderId: "373977461303"
};

console.log(firebase)

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
