// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD952X60jiOydGQ1wJZB7R-YfYEVdKHvA4",
  authDomain: "mern-estate-7a678.firebaseapp.com",
  projectId:    "mern-estate-7a678",
  storageBucket: "mern-estate-7a678.appspot.com",
  messagingSenderId: "1098660289720",
  appId: "1:1098660289720:web:3a5e2e2f3a4f6e1c5e8b9c",
  measurementId:"G-EXAMPLE1234"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
