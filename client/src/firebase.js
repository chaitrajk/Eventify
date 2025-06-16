// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgejg3E6liyyMFtkx68d7ON9bwvTIHajA",
  authDomain: "eventify-10bb7.firebaseapp.com",
  projectId: "eventify-10bb7",
  storageBucket: "eventify-10bb7.appspot.com",
  messagingSenderId: "148206323790",
  appId: "1:148206323790:web:83b50c3e2eec0a0bca1b1f",
  measurementId: "G-L2GZ7WZJ00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };

