import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"; //for database

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  databaseURL:
    "https://junity-w-default-rtdb.asia-southeast1.firebasedatabase.app",
});
export const auth = app.auth();
export default app;
