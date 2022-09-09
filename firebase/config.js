import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhWNYit9lD2vXh4OnAdWf4iAAUgnMY6PY",
  authDomain: "crexconect.firebaseapp.com",
  projectId: "crexconect",
  storageBucket: "crexconect.appspot.com",
  messagingSenderId: "456809613894",
  appId: "1:456809613894:web:8cba9130bab799c6d09847"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp(); 

// init services
  const db = getFirestore(app)
  const auth = getAuth(app)
  const storage = getStorage(app);

  
  export { db, storage, auth }