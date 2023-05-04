import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA-8pN8sqnS3yO1jvgCvrskbGZUYrNH94k",
    authDomain: "shoppydo-d27a8.firebaseapp.com",
    projectId: "shoppydo-d27a8",
    storageBucket: "shoppydo-d27a8.appspot.com",
    messagingSenderId: "841715004693",
    appId: "1:841715004693:web:0a8dedc1ba0e663ca8251c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const shoppyDoData = getFirestore();