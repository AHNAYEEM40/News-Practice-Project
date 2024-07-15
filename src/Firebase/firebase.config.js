// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmhcCxklROFUnV_pQfL2nGecLop8wo-x0",
  authDomain: "news-practice-projects.firebaseapp.com",
  projectId: "news-practice-projects",
  storageBucket: "news-practice-projects.appspot.com",
  messagingSenderId: "264155575870",
  appId: "1:264155575870:web:02997b043909e42d15836f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;