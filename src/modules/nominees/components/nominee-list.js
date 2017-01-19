import React from 'react';

export default function(props) {
  return (
    <div className="data-list">

      {props.nominees.map(nominee => {

        return (
          <div key={nominee.id} className="data-list-item">
            <div className="controls">
              <button onClick={() => props.onNomineeClicked(nominee.id)}>{nominee.name}</button>
            </div>
          </div>
        );

      })}

    </div>
  );
}
