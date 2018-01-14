import React from 'react';
import CategoryContainer from '../containers/category-container';

// Using "Stateless Functional Components"
export default (props) => (
  <section className="picks">

    {Object.keys(props.categories).map(key => {

      return (
        <CategoryContainer key={key} category={props.categories[key]} />
      )

    })}

  </section>
)
