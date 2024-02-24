import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCWgua9C1w6OcYgeL-pQZziSQIdzPkwg5Q",
  authDomain: "shopfront-f3674.firebaseapp.com",
  projectId: "shopfront-f3674",
  storageBucket: "shopfront-f3674.appspot.com",
  messagingSenderId: "284672565051",
  appId: "1:284672565051:web:249ef9b785b5b52601a11e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)