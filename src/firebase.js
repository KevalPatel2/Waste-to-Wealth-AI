// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAxJNJ8f6oV1cy-ghlB6LZHktWzJhIHXQ",
  authDomain: "zerowaste-2ae1d.firebaseapp.com",
  projectId: "zerowaste-2ae1d",
  storageBucket: "zerowaste-2ae1d.firebasestorage.app",
  messagingSenderId: "312282808596",
  appId: "1:312282808596:web:a6eee480dfe89fad300201",
  measurementId: "G-LFHGHG8HMV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Add authentication
const analytics = getAnalytics(app);

export { auth }; // ✅ Export 'auth' for login/signup
export default app; // ✅ Default export for Firebase app
