// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-75fdb.firebaseapp.com",
  projectId: "taskmanager-75fdb",
  storageBucket: "taskmanager-75fdb.appspot.com",
  messagingSenderId: "507243395592",
  appId: "1:507243395592:web:93bb83f9948c1fad4defbd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);