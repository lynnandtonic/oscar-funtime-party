import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryList from '../components/category-list';
import CategoryModel from '../models'

class CategoryListContainer extends React.Component {

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
