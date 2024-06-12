// public/js/firebase.js
//import { initializeApp } from "firebase/app";

let firebaseConfig = {
  
    apiKey: "AIzaSyAzsD3BQegPwvU953j7nIFg-xPIOLZUDCo",
    authDomain: "blogging-website-5aedb.firebaseapp.com",
    projectId: "blogging-website-5aedb",
    storageBucket: "blogging-website-5aedb.appspot.com",
    messagingSenderId: "968205811424",
    appId: "1:968205811424:web:627fd86765f1b7a5de1a85"
  
};

firebase.initializeApp(firebaseConfig);

let dbs = firebase.firestore();

//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);

//export { dbs };
