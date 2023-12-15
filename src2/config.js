import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBIi8eEK2UUr1gIbPVf90HDVf00M5jZ-XY',
  authDomain: 'leee3-d81b8.firebaseapp.com',
  projectId: 'leee3-d81b8',
  storageBucket:  'leee3-d81b8.appspot.com',
  messagingSenderId:  '804079313535',
  appId:  '1:804079313535:web:c0eede5e6b97257f0d554a',
  measurementId:'G-59VDF0X5BM'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

