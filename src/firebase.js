import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDLX1KTKX5feDGMOXYDKHOtDbfY-OlgreM",
  authDomain: "instagram-clone-react-219df.firebaseapp.com",
  projectId: "instagram-clone-react-219df",
  storageBucket: "instagram-clone-react-219df.appspot.com",
  messagingSenderId: "309943774066",
  appId: "1:309943774066:web:865d8f3f00098abad6cbeb",
  measurementId: "G-SWDHXK4VCC",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
