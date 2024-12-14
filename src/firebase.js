// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "primeupdate-b5109.firebaseapp.com",
  projectId: "primeupdate-b5109",
  storageBucket: "primeupdate-b5109.firebasestorage.app",
  messagingSenderId: "600952552854",
  appId: "1:600952552854:web:2a538a04bc326dd46eb1b7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
