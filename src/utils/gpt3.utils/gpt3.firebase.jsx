import { initializeApp } from "firebase/app";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDb9bycBhhE_IQv37S_q3wb5Tlqx8fRFd0",
  authDomain: "gpt3-app-obscure.firebaseapp.com",
  projectId: "gpt3-app-obscure",
  storageBucket: "gpt3-app-obscure.appspot.com",
  messagingSenderId: "259243867146",
  appId: "1:259243867146:web:f04b1e4b96f5bf28e3f3f3",
  measurementId: "G-LFZEG2ZTSK",
};

// Initialize Firebase
const gpt3App = initializeApp(firebaseConfig);
const auth = getAuth(gpt3App);

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <h1>Log In</h1>
        <input type="email" placeholder="email" value={email} />
        <input type="password" placeholder="password" value={password} />
      </form>
    </div>
  );
};
