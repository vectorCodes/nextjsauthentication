// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "fir-tut-5cc02.firebaseapp.com",
  projectId: "fir-tut-5cc02",
  storageBucket: "fir-tut-5cc02.appspot.com",
  messagingSenderId: "139559628271",
  appId: "1:139559628271:web:f04242258362d19f995a1a",
  measurementId: "G-0GBXWMB651",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
