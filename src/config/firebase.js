// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzBVxWxtlKU8kW4IY8sTb3tfCAiD6F4L4",
  authDomain: "fir-v9-a6a4e.firebaseapp.com",
  projectId: "fir-v9-a6a4e",
  storageBucket: "fir-v9-a6a4e.appspot.com",
  messagingSenderId: "120881795019",
  appId: "1:120881795019:web:14b85d03e3c0773e49b04e",
  measurementId: "G-RV0CKQDR62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);