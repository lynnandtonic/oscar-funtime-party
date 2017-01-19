import React from 'react';
import Category from '../components/category';
import CategoryModel from '../models';

const CategoryContainer = React.createClass({

  propTypes: {
    category: CategoryModel
  },

  render: function() {
    return (
      <Category { ...this.props } />
    );
  }

});

export default CategoryContainer;