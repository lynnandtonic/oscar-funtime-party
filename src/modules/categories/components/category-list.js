import React from 'react';
import _ from 'lodash';
import CategoryContainer from '../containers/category-container';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.categories.map(category => {

        return (
          <CategoryContainer key={category.id} category={category} />
        )

      })}

    </div>
  );
}
