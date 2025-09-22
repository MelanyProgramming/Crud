// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmiGN8ZssfV5O5uvNMCaKLOtZ2Uv5mOvw",
  authDomain: "crud-system-4c3c0.firebaseapp.com",
  projectId: "crud-system-4c3c0",
  storageBucket: "crud-system-4c3c0.firebasestorage.app",
  messagingSenderId: "117980720053",
  appId: "1:117980720053:web:b4fc5c7c5588bb10d147fc",
  measurementId: "G-5L2DKTB4FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics , app};