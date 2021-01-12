import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from "../seed";

//we need a cofing here
const config = {
    apiKey: "AIzaSyBLWaRIK34D--bA9Ar3PaAsdebz9koln9w",
    authDomain: "firestore-23f5e.firebaseapp.com",
    databaseURL: "https://firestore-23f5e.firebaseio.com",
    projectId: "firestore-23f5e",
    storageBucket: "firestore-23f5e.appspot.com",
    messagingSenderId: "98842538956",
    appId: "1:98842538956:web:0a05244e13f505b34ca369"
};

const firebase = Firebase.initializeApp(config);   

//we need to somehow seed the database
//seedDatabase(firebase);

export{firebase};