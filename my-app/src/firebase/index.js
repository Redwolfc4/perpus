// Import the functions you need from the SDKs you need
import Firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
// import {} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAa0F-LtEOXBVeSUeARCmNrbAZLgmg8vUw',
  authDomain: 'perpus-f53dc.firebaseapp.com',
  projectId: 'perpus-f53dc',
  storageBucket: 'perpus-f53dc.appspot.com',
  messagingSenderId: '348355212154',
  appId: '1:348355212154:web:a97c786927b2f730f4dcc3',
  measurementId: 'G-G5LVFQBT6Q'
}

// Initialize Firebase
const Db = Firebase.initializeApp(firebaseConfig)
export default Db
