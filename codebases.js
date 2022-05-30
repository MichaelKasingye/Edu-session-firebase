// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6TkJ72UieNZIWY4-e05doQ7TCrdfoOYE",
  authDomain: "edu-projects-5eb83.firebaseapp.com",
  projectId: "edu-projects-5eb83",
  storageBucket: "edu-projects-5eb83.appspot.com",
  messagingSenderId: "424737214337",
  appId: "1:424737214337:web:2d8d68b8a8deeca000a280",
  measurementId: "G-PTFJDPLNHD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
