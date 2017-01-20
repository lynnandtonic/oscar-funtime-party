import React from 'react';
import _ from 'lodash';
import NomineeListContainer from '../../nominees/containers/nominee-list-container';

// Using "Stateless Functional Components"
export default (props) => {

  let category = props.category;

  return (
    <div key={category.id} className="category">
      <h2 className="category-name">{category.name}</h2>
      <NomineeListContainer { ...props } keys={_.keys(category.nominees)} />
    </div>
  )

}
