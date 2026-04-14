// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-9eb23.firebaseapp.com",
  projectId: "mern-auth-9eb23",
  storageBucket: "mern-auth-9eb23.firebasestorage.app",
  messagingSenderId: "426970370371",
  appId: "1:426970370371:web:b088a6f1d98aed9e7e1ff6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
