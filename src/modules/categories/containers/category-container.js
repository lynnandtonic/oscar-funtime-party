import React from 'react';
import { connect } from 'redux-bundler-react';
import Category from '../components/category';

const CategoryContainer = ({ category, nominees, doSelectCategoryWinner }) => {

  if (nominees === null) return null;

  let nomineeKeys = Object.keys(nominees);
  let categoryNominees = nomineeKeys.reduce((aggregator, key) => {
    if (category.nominees[key]) {
      aggregator.push(nominees[key]);
    }
    return aggregator;
  }, []);

  return (
    <Category category={category} nominees={categoryNominees} onNomineeClicked={ doSelectCategoryWinner } />
  );

}

export default connect(
  'selectNominees',
  'doSelectCategoryWinner',
  CategoryContainer
);
