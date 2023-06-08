import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import getAnalytics from "firebase/analytics";
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDkPN4IFW6wkE9eQg6A-tmMVj0lZaPJUgc",
    authDomain: "greenbin-906db.firebaseapp.com",
    projectId: "greenbin-906db",
    storageBucket: "greenbin-906db.appspot.com",
    messagingSenderId: "855496172230",
    appId: "1:855496172230:web:de4701721364d21134adc7",
    measurementId: "G-9V0ER4CHMH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//getAnalytics.getAnalytics(app);

export { firebase }
