import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCEahvFHhH93lmu3rc5CMZTQv3juzmC-P4",
    authDomain: "ecom-site-62307.firebaseapp.com",
    projectId: "ecom-site-62307",
    storageBucket: "ecom-site-62307.appspot.com",
    messagingSenderId: "404617747992",
    appId: "1:404617747992:web:1941e55f0cd26e69c46d6d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };