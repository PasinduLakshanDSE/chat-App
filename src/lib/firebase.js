
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-3fb46.firebaseapp.com",
  projectId: "reactchat-3fb46",
  storageBucket: "reactchat-3fb46.appspot.com",
  messagingSenderId: "990310756570",
  appId: "1:990310756570:web:933db4606d7a108f5cf5e3"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()