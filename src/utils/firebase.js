// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5O7kHsF9XlTx3Vdb0DdbRRgFpZnsK0NY",
  authDomain: "netflixgpt-9d09a.firebaseapp.com",
  projectId: "netflixgpt-9d09a",
  storageBucket: "netflixgpt-9d09a.firebasestorage.app",
  messagingSenderId: "908370856191",
  appId: "1:908370856191:web:e4ded44d047445113264ca",
  measurementId: "G-1199J35GSW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
