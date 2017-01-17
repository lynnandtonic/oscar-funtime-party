import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.categories.map(category => {

        return (
          <div key={category.id} className="data-list-item">
            <div className="details">
              <h2>{category.name}</h2>
            </div>
          </div>
        );

      })}

    </div>
  );
}
