import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAVHcKfjATKkilN0RZHLq4nCouvT0JhBAk",
  authDomain: "foodmart-a3c72.firebaseapp.com",
  projectId: "foodmart-a3c72",
  storageBucket: "foodmart-a3c72.appspot.com",
  messagingSenderId: "765086226261",
  appId: "1:765086226261:web:7a8fe7357e0fb37f5c01dc",
  measurementId: "G-XX3FK2VTDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export{auth,provider};
