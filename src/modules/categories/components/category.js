import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (

    <div key={props.category.id} className="data-list-item">
      <div className="details">
        <h2>{props.category.name}</h2>
      </div>

      {props.children}
    </div>

  );
}
