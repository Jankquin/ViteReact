import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2NwV9sjNa71p6oo3HQMpXPI02ZqSdJ5Y",
  authDomain: "project-valone.firebaseapp.com",
  projectId: "project-valone",
  storageBucket: "project-valone.appspot.com",
  messagingSenderId: "479798665079",
  appId: "1:479798665079:web:878f9361f2118a039ccb72",
  measurementId: "G-FL9FH0SC61"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
