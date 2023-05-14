// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5FUeZNaOHZ15ku_CzDOnHY9NJj23r39M",
  authDomain: "chat-app-68806.firebaseapp.com",
  projectId: "chat-app-68806",
  storageBucket: "chat-app-68806.appspot.com",
  messagingSenderId: "112239794542",
  appId: "1:112239794542:web:99a483e3e661c229dc897f",
  measurementId: "G-83ECMF7CMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;