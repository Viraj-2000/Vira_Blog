// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vira-blog-8ec8b.firebaseapp.com",
  projectId: "vira-blog-8ec8b",
  storageBucket: "vira-blog-8ec8b.appspot.com",
  messagingSenderId: "1091694857210",
  appId: "1:1091694857210:web:c0447a0a36d109a9113243",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
