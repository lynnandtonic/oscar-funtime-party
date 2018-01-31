import React from 'react';
import { connect } from 'redux-bundler-react';
import Category from '../components/category';

const CategoryContainer = ({ category, selections, nominees, doSelectCategoryWinner }) => {

  if (nominees === null) return null;

  let nomineeKeys = Object.keys(nominees);
  let categoryNominees = nomineeKeys.reduce((aggregator, key) => {
    if (category.nominees[key]) {
      aggregator.push(nominees[key]);
    }
    return aggregator;
  }, []);
  let selectedNomineeId = selections ? selections[category.id] : null;

  return (
    <Category category={category} selectedKey={selectedNomineeId} nominees={categoryNominees} onNomineeClicked={ doSelectCategoryWinner } />
  );

}

export default connect(
  'selectNominees',
  'selectSelections',
  'doSelectCategoryWinner',
  CategoryContainer
);
