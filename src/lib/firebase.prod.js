import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBL2uVF0o875T4l1X8rwC1JoyDUbqQJ2U0",
  authDomain: "netflix-69782.firebaseapp.com",
  projectId: "netflix-69782",
  storageBucket: "netflix-69782.appspot.com",
  messagingSenderId: "547749381829",
  appId: "1:547749381829:web:0f2724dde4bd31959952ac",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
