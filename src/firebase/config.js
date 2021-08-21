import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCVyyZ8RJKE-UmiU19l7GInRVUElRaHhYQ",
    authDomain: "fir-todo-45a24.firebaseapp.com",
    projectId: "fir-todo-45a24",
    storageBucket: "fir-todo-45a24.appspot.com",
    messagingSenderId: "683888571086",
    appId: "1:683888571086:web:5853f7f5ebefd70050d69f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, timestamp };
