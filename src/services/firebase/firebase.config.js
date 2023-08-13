import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCOLzzFktGFype2tXZk3qsolRLeA5K_yX8",
  authDomain: "resturantapp-3de94.firebaseapp.com",
  projectId: "resturantapp-3de94",
  storageBucket: "resturantapp-3de94.appspot.com",
  messagingSenderId: "644050920429",
  appId: "1:644050920429:web:a7e21a34329abbe1c1bde4",
  measurementId: "G-V9B88GBVH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)