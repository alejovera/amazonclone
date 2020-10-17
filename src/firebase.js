import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBhRLYCUSndF5e1pb_i1CljiPthy5t6pKY",
    authDomain: "clone-6c5ca.firebaseapp.com",
    databaseURL: "https://clone-6c5ca.firebaseio.com",
    projectId: "clone-6c5ca",
    storageBucket: "clone-6c5ca.appspot.com",
    messagingSenderId: "1096556697359",
    appId: "1:1096556697359:web:1b4b4b3e1a94a273e0507a",
    measurementId: "G-FWSE6S7EEW"
});

const auth = firebase.auth();

export { auth };