import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB7DBJ4TqrXWoix_5PTOKceb4WQ_ejue7U",
  authDomain: "todoapp-55817.firebaseapp.com",
  projectId: "todoapp-55817",
  storageBucket: "todoapp-55817.appspot.com",
  messagingSenderId: "56449760316",
  appId: "1:56449760316:web:e6f552335a28f340471739",
  measurementId: "G-6SMQE8XFGM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}
