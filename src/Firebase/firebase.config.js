// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNVrzYJqVl_EwRIBMvLfo5Qv4LUSf2LbY",
  authDomain: "technology-electronics-65785.firebaseapp.com",
  projectId: "technology-electronics-65785",
  storageBucket: "technology-electronics-65785.appspot.com",
  messagingSenderId: "181240494981",
  appId: "1:181240494981:web:2551bd33b1903b487222ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;