import firebase from 'firebase';
import { nomineeWasFetched, fetchNominees } from '../actions';

export function getNominees() {

  return function(dispatch) {

    dispatch(fetchNominees);

    let firebaseRef = firebase.database().ref("nominees");
    firebaseRef.on("child_added", function(dataSnapshot) {
      let nominee = dataSnapshot.val();
      dispatch(nomineeWasFetched(nominee));
    });

  };
}