import firebase from 'firebase';
import { categoryWasFetched, fetchCategories } from '../actions';

const getCategories = () => {

  return (dispatch) => {

    dispatch(fetchCategories);
    let firebaseRef = firebase.database().ref("categories");
    firebaseRef.on("child_added", function(dataSnapshot) {
      let category = dataSnapshot.val();
      dispatch(categoryWasFetched(category));
    });

  };

}

export default getCategories;