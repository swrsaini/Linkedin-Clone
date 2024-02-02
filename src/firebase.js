import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNwu2eJJ2mcfHtjAErNjs4hE3NQhgs0xE",
    authDomain: "linkedin-clone-3ed9d.firebaseapp.com",
    projectId: "linkedin-clone-3ed9d",
    storageBucket: "linkedin-clone-3ed9d.appspot.com",
    messagingSenderId: "367904538593",
    appId: "1:367904538593:web:27be7f91e8e37ac84a5ca0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };