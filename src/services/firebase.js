// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF0zvyG13vlSjlfJSpD9MPUuSsPbk008Q",
  authDomain: "onpenclose.firebaseapp.com",
  projectId: "onpenclose",
  storageBucket: "onpenclose.appspot.com",
  messagingSenderId: "507044234122",
  appId: "1:507044234122:web:4038482a9f9b1138b5be73",
  measurementId: "G-738DQM02W7"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth(app)