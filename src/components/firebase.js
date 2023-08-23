import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDXPoHnqw-pLF3GbxELbZcelSkZ7JH0_Yg",
    authDomain: "insc-89879.firebaseapp.com",
    projectId: "insc-89879",
    storageBucket: "insc-89879.appspot.com",
    messagingSenderId: "81809828983",
    appId: "1:81809828983:web:35513c0685cc48794bea72",
    measurementId: "G-4RZK9FWHT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app)

export {auth, storage}

