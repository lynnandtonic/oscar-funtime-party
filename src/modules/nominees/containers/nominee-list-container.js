import React from 'react';
import { connect } from 'react-redux';
import NomineeList from '../components/nominee-list';
import _ from 'lodash';

const CategoryListContainer = React.createClass({

  render: function() {
    let self = this;
    let nominees = _.filter(this.props.nominees, function(n) {
      return _.includes(self.props.keys, n.id);
    });

    return (
      <NomineeList nominees={nominees} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    nominees: store.nomineeState.nominees
  };
};

export default connect(mapStateToProps)(CategoryListContainer);