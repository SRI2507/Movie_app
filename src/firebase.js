
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDCHwyNLWITCuagsSoKMvqTQhUZ_2E8aWI",
  authDomain: "movie-app-35cd7.firebaseapp.com",
  projectId: "movie-app-35cd7",
  storageBucket: "movie-app-35cd7.appspot.com",
  messagingSenderId: "882881731969",
  appId: "1:882881731969:web:eaa0ccaf8be4a5bebf9c80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);