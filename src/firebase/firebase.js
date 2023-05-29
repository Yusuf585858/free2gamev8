// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8dIFPN0XOgBrdvqgRI9SZnV7DeFbZ8dU",
    authDomain: "free2game-39f8d.firebaseapp.com",
    projectId: "free2game-39f8d",
    storageBucket: "free2game-39f8d.appspot.com",
    messagingSenderId: "482799466166",
    appId: "1:482799466166:web:b4f36b075383d4342ed817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);