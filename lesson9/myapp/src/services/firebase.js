// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwkAo6h1L83h3wJFsII7GlNDguIkrh5qk",
    authDomain: "demoapp-4ec66.firebaseapp.com",
    projectId: "demoapp-4ec66",
    storageBucket: "demoapp-4ec66.appspot.com",
    messagingSenderId: "798607020066",
    appId: "1:798607020066:web:5a2eeb278159bb28733a7b",
    databaseURL:'https://demoapp-4ec66-default-rtdb.firebaseio.com/'
  };

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export const auth = getAuth(firebaseApp);
// Get a reference to the database service
export const db = getDatabase(firebaseApp);