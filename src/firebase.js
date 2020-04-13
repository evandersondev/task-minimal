import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyArRcrjK6L8rh1ojJcNkJh0d6otLwsF37g",
  authDomain: "task-minimal.firebaseapp.com",
  databaseURL: "https://task-minimal.firebaseio.com",
  projectId: "task-minimal",
  storageBucket: "task-minimal.appspot.com",
  messagingSenderId: "1042440405314",
  appId: "1:1042440405314:web:0a2e66fc4910cee4c248db",
  measurementId: "G-SN2VSXH9S4",
};

firebase.initializeApp(config);
firebase.analytics();
export const auth = firebase.auth();
export const db = firebase.firestore();
