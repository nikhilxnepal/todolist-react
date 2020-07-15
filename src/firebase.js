import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZNqziYqc_1YdSUGsZK-8fV7i4kff4uCQ",
  authDomain: "todo-app-cp-f10b2.firebaseapp.com",
  databaseURL: "https://todo-app-cp-f10b2.firebaseio.com",
  projectId: "todo-app-cp-f10b2",
  storageBucket: "todo-app-cp-f10b2.appspot.com",
  messagingSenderId: "39139099114",
  appId: "1:39139099114:web:dd16d13f6f30a871c6f293",
  measurementId: "G-W2CXLXDM0F",
});

const db = firebaseApp.firestore();

export default db; //or export { db };
