import React from 'react';
import Category from '../containers/category-container';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.categories.map(category => {

        return (
          <Category key={category.id} category={category} />
        );

      })}

    </div>
  );
}
