
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  "projectId": "studio-7445211165-728a7",
  "appId": "1:358291345411:web:4c43d8cf0ad5e4f206fe36",
  "apiKey": "AIzaSyD2F59n6fq44ljvsszHnlZj2Ej0iDUOo3Y",
  "authDomain": "studio-7445211165-728a7.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "358291345411",
  "databaseURL": "https://studio-7445211165-728a7-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };
