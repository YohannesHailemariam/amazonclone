// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASXjEsQHVvIdDX83Xxkiz5PtLwZEHfrNY",
  authDomain: "clone-83d10.firebaseapp.com",
  projectId: "clone-83d10",
  storageBucket: "clone-83d10.appspot.com",
  messagingSenderId: "1089888388831",
  appId: "1:1089888388831:web:a778e8fa9fc84c15568b6a",
  measurementId: "G-SLN68NW7VE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;