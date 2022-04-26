import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj2Pup8uA24p-lPmBRqqe0mXKm5Up1z7Y",
  authDomain: "connect-d7d40.firebaseapp.com",
  projectId: "connect-d7d40",
  storageBucket: "connect-d7d40.appspot.com",
  messagingSenderId: "535547087659",
  appId: "1:535547087659:web:ee30bdb687b5761fe9936e",
  measurementId: "G-TNP949FBDS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

const store = getFirestore(app);

export { app, auth, store };
