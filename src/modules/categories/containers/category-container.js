import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Category from '../components/category';
import CategoryModel from '../models';
import { categoryWinnerSelected } from '../actions';
import store from '../../../store';

const CategoryContainer = React.createClass({

  onNomineeClicked: (category, nomineeId) => {
    store.dispatch(categoryWinnerSelected({
      [category.id]: nomineeId
    }));
  },

  propTypes: {
    category: CategoryModel,
    selectedKey: PropTypes.string
  },

  render: function() {

    return (
      <Category { ...this.props } onNomineeClicked={ this.onNomineeClicked } />
    );
  }

});

const mapStateToProps = (store, ownProps) => {
  return {
    selectedKey: store.categoryState.selections[ownProps.category.id],
  };
};

export default connect(
  mapStateToProps
)(CategoryContainer);