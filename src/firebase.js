import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5VRT1f-QFl2JOWQvubHhOPaG-jlmCmro",
  authDomain: "tikclone-9cbb6.firebaseapp.com",
  projectId: "tikclone-9cbb6",
  storageBucket: "tikclone-9cbb6.appspot.com",
  messagingSenderId: "509966002936",
  appId: "1:509966002936:web:ffeabd934b1c1d528a290d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db