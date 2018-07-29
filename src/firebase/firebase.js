import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBKOPyfanfLKrGq7jsWHoh-AjGGCtjvoWI",
    authDomain: "pinme-1483907144715.firebaseapp.com",
    databaseURL: "https://pinme-1483907144715.firebaseio.com",
    projectId: "pinme-1483907144715",
    storageBucket: "pinme-1483907144715.appspot.com",
    messagingSenderId: "675356921021"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
    auth,
  };
