import React from 'react';
import _ from 'lodash';
import NomineeListContainer from '../../nominees/containers/nominee-list-container';

// Using "Stateless Functional Components"
export default function(props) {

  let category = props.category;

  return (
    <div key={category.id} className="data-list-item">
      <div className="details">
        <h2>{category.name}</h2>
      </div>

      <NomineeListContainer keys={_.keys(category.nominees)} />
    </div>
  )

}
