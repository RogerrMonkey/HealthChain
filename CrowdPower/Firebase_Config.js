// Firebase_Config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyAikCHx6rqvPY5oOfFCFkbJ4qPqWC62glI",
    authDomain: "healthchain-15a9d.firebaseapp.com",
    projectId: "healthchain-15a9d",
    storageBucket: "healthchain-15a9d.appspot.com",
    messagingSenderId: "803411211014",
    appId: "1:803411211014:web:361c6650965291db27a487",
    measurementId: "G-CHWNPG1C31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };
