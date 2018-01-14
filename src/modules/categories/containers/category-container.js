import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Category from '../components/category';
import CategoryModel from '../models';
import NomineeModel from '../../nominees/models';
import { categoryWinnerSelected } from '../actions';
import store from '../../../store';

class CategoryContainer extends React.Component {

  static onNomineeClicked(category, nomineeId) {
    store.dispatch(categoryWinnerSelected({
      [category.id]: nomineeId
    }));
  }

  render() {
    let nomineeKeys = Object.keys(this.props.category.nominees);
    let nominees = nomineeKeys.reduce((aggregator, key) => {
      if (this.props.nominees[key]) {
        aggregator.push(this.props.nominees[key]);
      }
      return aggregator;
    }, []);
    return (
      <Category { ...this.props } nominees={nominees} onNomineeClicked={ CategoryContainer.onNomineeClicked } />
    );
  }

}

CategoryContainer.propTypes = {
  category: CategoryModel,
  selectedKey: PropTypes.string,
  nominees: PropTypes.objectOf(NomineeModel).isRequired,
};

const mapStateToProps = (store, ownProps) => {
  return {
    selectedKey: store.categoryState.selections[ownProps.category.id],
    nominees: store.nomineeState.nominees
  };
};

export default connect(
  mapStateToProps
)(CategoryContainer);
