import React from 'react';
import PropTypes from 'prop-types';
import NomineeModel from '../models';
import NomineeList from '../components/nominee-list';

class NomineeListContainer extends React.Component {

  render() {
    return (
      <NomineeList {...this.props} />
    );
  }

}

NomineeListContainer.propTypes = {
  nominees: PropTypes.arrayOf(NomineeModel).isRequired,
  selectedKey: PropTypes.string,
  onNomineeClicked: PropTypes.func.isRequired
};

export default NomineeListContainer;
