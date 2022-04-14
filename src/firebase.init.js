// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0OvOyXEtCXPliaYE2tWIUgl2mqW-StM8",
  authDomain: "email-n-password-auth.firebaseapp.com",
  projectId: "email-n-password-auth",
  storageBucket: "email-n-password-auth.appspot.com",
  messagingSenderId: "397583861031",
  appId: "1:397583861031:web:1cef0315aa137b51131502",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
