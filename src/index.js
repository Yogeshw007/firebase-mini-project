import { StrictMode } from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/firestore";

import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyCjsj6S1qWRlSSy-3FTeWcwitid2xhSQX4",
  authDomain: "users-4195d.firebaseapp.com",
  projectId: "users-4195d",
  storageBucket: "users-4195d.appspot.com",
  messagingSenderId: "57581803638",
  appId: "1:57581803638:web:69cf90ded73681f05c6757"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
