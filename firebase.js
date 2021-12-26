// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWMpU2F_JkCONPcsNGff7iNDR1E_qV6I0",
  authDomain: "insta-app-next.firebaseapp.com",
  projectId: "insta-app-next",
  storageBucket: "insta-app-next.appspot.com",
  messagingSenderId: "914160576473",
  appId: "1:914160576473:web:8520ca8c3609cd6a35dbc8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };