
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCaXVx-H8d0pORwlGlx09oNhvkyl8NZNfM",
    authDomain: "e-commerce-clone-1d82c.firebaseapp.com",
    projectId: "e-commerce-clone-1d82c",
    storageBucket: "e-commerce-clone-1d82c.appspot.com",
    messagingSenderId: "792435906804",
    appId: "1:792435906804:web:ebf778f8e74081cf17e6a1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)