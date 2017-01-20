import React from 'react';
import CategoryContainer from '../containers/category-container';

// Using "Stateless Functional Components"
export default (props) => {
  return (
    <section class="picks">

      {props.categories.map(category => {

        return (
          <CategoryContainer key={category.id} category={category} />
        )

      })}

    </section>
  );
}
