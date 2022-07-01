// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVj4lm3rKU_X9IliD-QF93Tb8T_DELXcs",
    authDomain: "clonetflix-cb108.firebaseapp.com",
    projectId: "clonetflix-cb108",
    storageBucket: "clonetflix-cb108.appspot.com",
    messagingSenderId: "414586026203",
    appId: "1:414586026203:web:a5343b054ae1a076c1b4fe"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }