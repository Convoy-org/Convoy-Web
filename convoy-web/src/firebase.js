import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQdqk5E-XOSUh-3znp0eIWvmfe10pMmfU",
  authDomain: "convoy-4ebff.firebaseapp.com",
  projectId: "convoy-4ebff",
  storageBucket: "convoy-4ebff.appspot.com",
  messagingSenderId: "19881279031",
  appId: "1:19881279031:web:186fb6d7f92895cf6fc9b2",
  measurementId: "G-GVJK7XKEVX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };
