
import { initializeApp } from "firebase/app";
import { getFirestore }  from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC0REGUGeohmXU3CjTlWZK4bvikiPR0ORM",
  authDomain: "be-la-cuadreria.firebaseapp.com",
  projectId: "be-la-cuadreria",
  storageBucket: "be-la-cuadreria.appspot.com",
  messagingSenderId: "213329091116",
  appId: "1:213329091116:web:ccebd54c9483a99bf34f89"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);