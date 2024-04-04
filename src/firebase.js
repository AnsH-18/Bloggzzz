// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhIzaYI17U9I6IkTMsZWe_RP3RajjR6nM",
  authDomain: "auth-development-72ac1.firebaseapp.com",
  projectId: "auth-development-72ac1",
  storageBucket: "auth-development-72ac1.appspot.com",
  messagingSenderId: "929420308250",
  appId: "1:929420308250:web:e339dd1dc74b189cad06a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

