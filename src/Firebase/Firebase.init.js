// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCu-RBP9JIdaJ1FNPivBDrJ_WIIwygNN-s",
    authDomain: "healthcare-website-214f0.firebaseapp.com",
    projectId: "healthcare-website-214f0",
    storageBucket: "healthcare-website-214f0.appspot.com",
    messagingSenderId: "865795132481",
    appId: "1:865795132481:web:57783d37b91ce2f5d8cac0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;