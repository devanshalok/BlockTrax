// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCHZENx_rrQzXSBTzrEzoEgf8-1KMHYxqM',
  authDomain: 'blocktrax-7cffe.firebaseapp.com',
  projectId: 'blocktrax-7cffe',
  storageBucket: 'blocktrax-7cffe.appspot.com',
  messagingSenderId: '966267279480',
  appId: '1:966267279480:web:48fb16e272b80148b5b58d',
  measurementId: 'G-99BKB9HNR8'
}
// const debug = false

// if (debug) {
//   const auth = getAuth()
//   connectAuthEmulator(auth, 'http://localhost:9097')
//   const db = getFirestore()
//   connectFirestoreEmulator(db, 'localhost', 9777)
//   const storage = getStorage()
//   connectStorageEmulator(storage, 'localhost', 9193)
//   const functions = getFunctions(getApp())
//   connectFunctionsEmulator(functions, 'localhost', 5001)
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
export const auth = getAuth()
export const db = getFirestore()

export default app
