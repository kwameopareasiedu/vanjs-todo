import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCdznb3_DIoUFOGxagE43xSW9dolI75bE",
  authDomain: "vanjs-todo.firebaseapp.com",
  projectId: "vanjs-todo",
  storageBucket: "vanjs-todo.appspot.com",
  messagingSenderId: "184513423059",
  appId: "1:184513423059:web:a1393edd008ac8342ed626",
  measurementId: "G-8Z2QGKVVHY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
