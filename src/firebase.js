import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBqRbQo1ruIV7SQ8RWQYJU6mT3DFR3WmFc",
    authDomain: "link-shortner-41db8.firebaseapp.com",
    projectId: "link-shortner-41db8",
    storageBucket: "link-shortner-41db8.appspot.com",
    messagingSenderId: "459735974691",
    appId: "1:459735974691:web:6c739ca2c2f36809cc4296"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();

  export default db;