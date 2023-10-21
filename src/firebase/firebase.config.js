// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApKJdu7c4m4ZTTKgMjrEUdZzAjxQzuiNE",
  authDomain: "assignment-10-e2030.firebaseapp.com",
  projectId: "assignment-10-e2030",
  storageBucket: "assignment-10-e2030.appspot.com",
  messagingSenderId: "792719115521",
  appId: "1:792719115521:web:0ef03a01c51b879306c700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth