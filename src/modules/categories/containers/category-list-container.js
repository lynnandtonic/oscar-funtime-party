import React from 'react';
import { connect } from 'react-redux';
import ContainerList from '../views/category-list';
import * as categoriesApi from '../api';
// import ReactFireMixin from 'reactfire';

const CategoryListContainer = React.createClass({

  // mixins: [ReactFireMixin],

  componentDidMount: function() {
    categoriesApi.getCategories();
  },

  render: function() {
    return (
      <ContainerList categories={this.props.categories} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    categories: store.categoryState.categories
  };
};

export default connect(mapStateToProps)(CategoryListContainer);