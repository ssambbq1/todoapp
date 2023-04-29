
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCfu1b7yJF8Rb-3EwAomw02sHe3j4CACNI",
  authDomain: "jhtodolist1.firebaseapp.com",
  projectId: "jhtodolist1",
  storageBucket: "jhtodolist1.appspot.com",
  messagingSenderId: "317629210313",
  appId: "1:317629210313:web:6600a214e0371dc1b6b718",
  measurementId: "G-GE6JTC09ES"
};



const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {
    db
}