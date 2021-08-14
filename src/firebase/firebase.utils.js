import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB0Vn3sRgoKtJHJSFzLhxM5Ge6_DDG0U6k",
  authDomain: "crwn-db-892b7.firebaseapp.com",
  projectId: "crwn-db-892b7",
  storageBucket: "crwn-db-892b7.appspot.com",
  messagingSenderId: "303379660583",
  appId: "1:303379660583:web:213ce007f64a3933f27302",
  measurementId: "G-84KYZS54MJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
