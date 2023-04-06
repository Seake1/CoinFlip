import { getDatabase } from "firebase/database"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

  databaseURL: "https://games-6ced1-default-rtdb.europe-west1.firebasedatabase.app/",

  apiKey: "AIzaSyDT8zVY6kfuVyzs72xVdCh4l3Z7YTCWLu0",

  authDomain: "games-6ced1.firebaseapp.com",

  projectId: "games-6ced1",

  storageBucket: "games-6ced1.appspot.com",

  messagingSenderId: "416050136986",

  appId: "1:416050136986:web:bbf1e0ef5f617dbb3f5c23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);
export { auth, database };
