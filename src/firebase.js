import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyAEScirtnwr31EQhVqI2UoS9ERx_cDZStw",
  authDomain: "resultsdashboard-68b8b.firebaseapp.com",
  projectId: "resultsdashboard-68b8b",
  storageBucket: "resultsdashboard-68b8b.appspot.com",
  messagingSenderId: "340317342769",
  appId: "1:340317342769:web:bd1baee313f565390c1910",
  measurementId: "G-7D6W8QBEXY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const resultsCollection = db.collection("student-results");

export const addResults = (results) => {
  return resultsCollection.add(results);
};

export const getResults = async () => {
  const results = await resultsCollection.doc(id).get();
  return results.exists ? results.data() : null;
};
