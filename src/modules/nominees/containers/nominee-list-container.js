import React from 'react';
import NomineeList from '../components/nominee-list';
import { connect } from 'redux-bundler-react';

const NomineeListContainer = (props) => {

  return (
    <NomineeList {...props} />
  );

}

export default connect(
  NomineeListContainer
);
