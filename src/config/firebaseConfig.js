import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   // databaseURL: process.env.REACT_APP_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyA6TkJ72UieNZIWY4-e05doQ7TCrdfoOYE",
    authDomain: "edu-projects-5eb83.firebaseapp.com",
    projectId: "edu-projects-5eb83",
    storageBucket: "edu-projects-5eb83.appspot.com",
    messagingSenderId: "424737214337",
    appId: "1:424737214337:web:2d8d68b8a8deeca000a280",
    measurementId: "G-PTFJDPLNHD"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const db = firebase.firestore(app);
export const db = getFirestore(app);
