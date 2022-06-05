// Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat';
// import * as firebase from 'firebase/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth(app);

const firebaseConfig = {
  apiKey: "AIzaSyCug-i2QcmBY5Vs_byVOus6CwjRTbq-kx4",
  authDomain: "uber-clone-9422c.firebaseapp.com",
  projectId: "uber-clone-9422c",
  storageBucket: "uber-clone-9422c.appspot.com",
  messagingSenderId: "920806892529",
  appId: "1:920806892529:web:30f439cbdb1bcc2f9f5a50",
  measurementId: "G-808CPD5M48"
};

// Initialize Firebase


export { app, provider, auth };