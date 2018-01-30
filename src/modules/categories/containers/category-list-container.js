import React from 'react';
import { connect } from 'redux-bundler-react';
import CategoryList from '../components/category-list';

const CategoryListContainer = ({ categoriesData }) => {
  if (categoriesData) {
    return <CategoryList categories={categoriesData} />
  }
  return null;

}

export default connect(
  'selectCategoriesData',
  CategoryListContainer
);
