// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvFCmgceeVJzKCvG-cJCeMquhMXyYsPks",
  authDomain: "proyecto-fiinal.firebaseapp.com",
  projectId: "proyecto-fiinal",
  storageBucket: "proyecto-fiinal.appspot.com",
  messagingSenderId: "608309683221",
  appId: "1:608309683221:web:1fe7f80821f0e16cf3da1c",
  measurementId: "G-0M678PR15R"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
const analytics = getAnalytics(app);