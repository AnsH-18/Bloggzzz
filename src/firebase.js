// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-ykPMqtBiWo5eUWdbeTAkmUiYghl_dDI',
  authDomain: "auth-production-2c326.firebaseapp.com",
  projectId: "auth-production-2c326",
  storageBucket: "auth-production-2c326.appspot.com",
  messagingSenderId: "380395640464",
  appId:  "1:380395640464:web:e909dc63aeaf5bbeb9ea15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)


