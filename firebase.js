import firebase from 'firebase/compat/app';
import { doc, addDoc, getDoc, setDoc, getDocs, query, where, getFirestore, collection, updateDoc } from 'firebase/firestore/lite';
import { getAuth, updatePassword, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, confirmPasswordReset, beforeAuthStateChanged, onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkPN4IFW6wkE9eQg6A-tmMVj0lZaPJUgc",
    authDomain: "greenbin-906db.firebaseapp.com",
    projectId: "greenbin-906db",
    storageBucket: "greenbin-906db.appspot.com",
    messagingSenderId: "855496172230",
    appId: "1:855496172230:web:de4701721364d21134adc7",
    measurementId: "G-9V0ER4CHMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export {
    app,
    auth,
    storage,
    getAuth,
    db,
    doc,
    getDoc,
    setDoc,
    addDoc,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    ref,
    uploadBytes,
    getDownloadURL,
    signOut,
    updatePassword,
    collection,
    getDocs,
    query,
    where,
    updateDoc
};