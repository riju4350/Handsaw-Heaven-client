// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC83W-KxckRQERoK_FSw2Xg5GKitAu3b3g",
  authDomain: "handsaw-heaven-cbbe9.firebaseapp.com",
  projectId: "handsaw-heaven-cbbe9",
  storageBucket: "handsaw-heaven-cbbe9.appspot.com",
  messagingSenderId: "43220594224",
  appId: "1:43220594224:web:42f742e4dc5cadc244c7f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;