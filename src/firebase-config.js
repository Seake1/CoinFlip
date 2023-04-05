// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyfX64pfAfPewUDdZfNdC-ShcxD5ldOrw",
  authDomain: "coinflip-f2636.firebaseapp.com",
  projectId: "coinflip-f2636",
  storageBucket: "coinflip-f2636.appspot.com",
  messagingSenderId: "144881821009",
  appId: "1:144881821009:web:b2accfd39cc7c891961f70",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
export { auth };
