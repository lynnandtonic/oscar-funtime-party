import React from 'react';
import { connect } from 'react-redux';
import CategoryList from '../components/category-list';

const CategoryListContainer = React.createClass({

  render: function() {
    return (
      <CategoryList categories={this.props.categories} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    categories: store.categoryState.categories
  };
};

export default connect(mapStateToProps)(CategoryListContainer);