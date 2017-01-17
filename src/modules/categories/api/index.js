import store from '../../../store';
import firebase from 'firebase';
import { categoryWasFetched } from '../actions';

export function getCategories() {
  this.firebaseRef = firebase.database().ref("categories");
  this.firebaseRef.on("child_added", function(dataSnapshot) {
    let category = dataSnapshot.val();
    store.dispatch(categoryWasFetched(category));
  });
}