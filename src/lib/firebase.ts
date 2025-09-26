
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  "projectId": "studio-7445211165-728a7",
  "appId": "1:358291345411:web:4c43d8cf0ad5e4f206fe36",
  "storageBucket": "studio-7445211165-728a7.appspot.com",
  "apiKey": "AIzaSyD2F59n6fq44ljvsszHnlZj2Ej0iDUOo3Y",
  "authDomain": "studio-7445211165-728a7.firebaseapp.com",
  "messagingSenderId": "358291345411",
  "databaseURL": "https://studio-7445211165-728a7-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);


export { app, auth };
