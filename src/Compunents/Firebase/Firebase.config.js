// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmGwUYfgD0kwdpBCLlz-Ofn2Mw_xr8BCk",
  authDomain: "assignment-10-44e27.firebaseapp.com",
  projectId: "assignment-10-44e27",
  storageBucket: "assignment-10-44e27.appspot.com",
  messagingSenderId: "459713129935",
  appId: "1:459713129935:web:a67d3588cd31527b6eb6ba",
  measurementId: "G-T8GJW3HFBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
const auth = getAuth(app)
export default auth;