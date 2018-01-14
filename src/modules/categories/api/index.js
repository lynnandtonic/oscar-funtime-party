import firebase from 'firebase';
import { categoriesWereFetched, fetchCategories } from '../actions';

export function getCategories() {

  return (dispatch) => {

    dispatch(fetchCategories);
    let firebaseRef = firebase.database().ref("categories");
    firebaseRef.on("value", function(dataSnapshot) {
      let category = dataSnapshot.val();
      dispatch(categoriesWereFetched(category));
    });

  };

}
