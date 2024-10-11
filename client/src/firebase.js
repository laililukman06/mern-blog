// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4dd90.firebaseapp.com",
  projectId: "mern-blog-4dd90",
  storageBucket: "mern-blog-4dd90.appspot.com",
  messagingSenderId: "726361835568",
  appId: "1:726361835568:web:5622188ec06050214985f5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
