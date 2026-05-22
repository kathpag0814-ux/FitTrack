import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import app from "./firebase";

export const db = getFirestore(app);
const firebaseConfig = {
  apiKey: "AIzaSyDraLmPKZiw6n2X1VBXd7bJtb0cdoD_W2I",
  authDomain: "fittrack-25ec9.firebaseapp.com",
  projectId: "fittrack-25ec9",
  storageBucket: "fittrack-25ec9.firebasestorage.app",
  messagingSenderId: "195463426984",
  appId: "1:195463426984:web:4820394e238d621078639d",
  measurementId: "G-GS19610B49"
};

const app = initializeApp(firebaseConfig);

export default app;