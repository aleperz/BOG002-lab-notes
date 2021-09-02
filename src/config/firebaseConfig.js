import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5IeEcsP2b6Pcolg3TjDc2nkLdKVB84Bs",
  authDomain: "labnotes-bcfc3.firebaseapp.com",
  projectId: "labnotes-bcfc3",
  storageBucket: "labnotes-bcfc3.appspot.com",
  messagingSenderId: "657654397741",
  appId: "1:657654397741:web:dedd5578555332aad871a4",
  measurementId: "G-RKJR5J2Y0K",
};

const fire = firebase.initializeApp(firebaseConfig);

export const db = fire.firestore();

export default firebase;
