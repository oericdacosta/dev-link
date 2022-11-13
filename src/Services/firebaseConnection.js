import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqsyjv5HJgqqho_d2BuGv6uoAT9A8hqZY",
  authDomain: "devlink-be102.firebaseapp.com",
  projectId: "devlink-be102",
  storageBucket: "devlink-be102.appspot.com",
  messagingSenderId: "956836920577",
  appId: "1:956836920577:web:c08eb84880f67071c2ef00"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};