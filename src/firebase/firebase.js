import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
}

// const firebaseConfig = {
//   apiKey: "AIzaSyB5kd3wrGuMGSF-acnVmd0mUpfD9r8Vzrc",
//   authDomain: "budgetapp-e193d.firebaseapp.com",
//   databaseURL: "https://budgetapp-e193d-default-rtdb.firebaseio.com",
//   projectId: "budgetapp-e193d",
//   storageBucket: "budgetapp-e193d.appspot.com",
//   messagingSenderId: "904745018697",
//   appId: "1:904745018697:web:7798abb43fe35cc717a698",
//   measurementId: "G-ZK08L9B2MD"
// };

firebase.initializeApp(firebaseConfig)

const expensesRef = firebase.database()
const googleProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleProvider, expensesRef as default }
