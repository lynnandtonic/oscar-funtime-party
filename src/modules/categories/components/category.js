import React from 'react';
import NomineeListContainer from '../../nominees/containers/nominee-list-container';

// Using "Stateless Functional Components"
export default (props) => (
  <div key={props.category.id} className="category">
    <h2 className="category-name">{props.category.name}</h2>
    <NomineeListContainer { ...props } />
  </div>
)
