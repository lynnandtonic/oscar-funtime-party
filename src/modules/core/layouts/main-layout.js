import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
      <header className="primary-header"></header>
      <main>
        {props.children}
      </main>
    </div>
  );
}
