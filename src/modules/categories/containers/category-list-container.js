import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryList from '../components/category-list';
import CategoryModel from '../models';
import store from '../../../store';
import { getCategories } from '../../../modules/categories/api';
import { getNominees } from '../../../modules/nominees/api';

class CategoryListContainer extends Component {

  componentDidMount() {
    store.dispatch(getCategories());
    store.dispatch(getNominees());
  }

  render() {
    return (
      <CategoryList categories={this.props.categories} />
    );
  }

}

CategoryListContainer.propTypes = {
  categories: PropTypes.objectOf(CategoryModel).isRequired
};

const mapStateToProps = (store) => {
  return {
    categories: store.categoryState.categories
  };
};

export default connect(mapStateToProps)(CategoryListContainer);
