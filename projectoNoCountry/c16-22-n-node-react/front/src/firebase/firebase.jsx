// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcVZORsTDURIXVveIpDd2buWSKUJEUsAI",
    authDomain: "serviya-d4eaa.firebaseapp.com",
    projectId: "serviya-d4eaa",
    storageBucket: "serviya-d4eaa.appspot.com",
    messagingSenderId: "1000088858147",
    appId: "1:1000088858147:web:fad4eac82d7f6b87794b96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)