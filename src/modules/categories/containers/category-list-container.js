import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CategoryList from '../components/category-list';
import CategoryModel from '../models'

const CategoryListContainer = React.createClass({

  propTypes: {
    categories: PropTypes.arrayOf(CategoryModel).isRequired
  },

  render: function() {
    return (
      <CategoryList categories={this.props.categories} />
    );
  }

});

const mapStateToProps = (store) => {
  return {
    categories: store.categoryState.categories
  };
};

export default connect(mapStateToProps)(CategoryListContainer);