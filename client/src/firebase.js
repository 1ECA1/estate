// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-48a51.firebaseapp.com",
  projectId: "estate-48a51",
  storageBucket: "estate-48a51.firebasestorage.app",
  messagingSenderId: "795910022493",
  appId: "1:795910022493:web:3320536cd1e0cc4327f4b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);