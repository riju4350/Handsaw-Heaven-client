// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   // apiKey:process.env.REACT_APP_API_KEY,
//   // authDomain:process.env.REACT_APP_AUTH_DOMAIN,
//   // projectId:process.env.REACT_APP_PROJECT_ID,
//   // storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
//   // messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
//   // appId:process.env.REACT_APP_APP_ID
//   apiKey: "AIzaSyBLJ7tZpNrQbO8DRWfziJ6AK6j9H6Oux5k",
//   authDomain: "handsaw-heaven.firebaseapp.com",
//   projectId: "handsaw-heaven",
//   storageBucket: "handsaw-heaven.appspot.com",
//   messagingSenderId: "683146259713",
//   appId: "1:683146259713:web:587682fce43d65a0fd3f00"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default auth;

// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
// import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  const auth = getAuth(app);
export default app;