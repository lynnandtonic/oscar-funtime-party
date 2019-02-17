import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
  apiKey: "AIzaSyBNcmcXQezVhhJDzY5Yi7xsvUAna499zxc",
  authDomain: "oscar-funtime-party.firebaseapp.com",
  databaseURL: "https://oscar-funtime-party.firebaseio.com",
  storageBucket: "oscar-funtime-party.appspot.com",
  messagingSenderId: "1008495820721"
});

export const provider = new firebase.auth.TwitterAuthProvider();
export const auth = firebase.auth();
export default firebase
