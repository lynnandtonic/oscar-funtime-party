import firebase from 'firebase';
import { nomineesWereFetched, fetchNominees } from '../actions';

export function getNominees() {

  return (dispatch) => {

    dispatch(fetchNominees);

    let firebaseRef = firebase.database().ref("nominees");
    firebaseRef.on("value", function(dataSnapshot) {
      let nominee = dataSnapshot.val();
      dispatch(nomineesWereFetched(nominee));
    });

  };
};
