// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzai-sXzqQYqa6e2X-EeS9wP1IZnqTOdg",
  authDomain: "journal-react-app-fb35e.firebaseapp.com",
  projectId: "journal-react-app-fb35e",
  storageBucket: "journal-react-app-fb35e.appspot.com",
  messagingSenderId: "246509087239",
  appId: "1:246509087239:web:6d9e30c9182432e9e858a2"
};
  

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(Firebaseapp);

export const FirebaseDB = getFirestore(Firebaseapp);
