// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAo_xPpbeKIbY_t90ZlXx-glsgQQnoWW6w",
  authDomain: "clone-6ba21.firebaseapp.com",
  projectId: "clone-6ba21",
  storageBucket: "clone-6ba21.appspot.com",
  messagingSenderId: "936299750326",
  appId: "1:936299750326:web:751ef8cc4679412c919717",
  measurementId: "G-N2154NWV83",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
