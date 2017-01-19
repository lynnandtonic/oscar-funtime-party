import firebase from 'firebase';

export function initializeDatasource () {

  firebase.initializeApp({
    apiKey: "AIzaSyBNcmcXQezVhhJDzY5Yi7xsvUAna499zxc",
    authDomain: "oscar-funtime-party.firebaseapp.com",
    databaseURL: "https://oscar-funtime-party.firebaseio.com",
    storageBucket: "oscar-funtime-party.appspot.com",
    messagingSenderId: "1008495820721"
  });

}
