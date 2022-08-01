import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBzqIuaXijNptuyJ_XfAy6pDhvIdj3C1Qs",
  authDomain: "clone-bd46c.firebaseapp.com",
  projectId: "clone-bd46c",
  storageBucket: "clone-bd46c.appspot.com",
  messagingSenderId: "774268787674",
  appId: "1:774268787674:web:61b59b6cfe8091c5957ee3",
  measurementId: "G-S6G58PG2ML",
});

const auth = firebase.auth();

export { auth };
