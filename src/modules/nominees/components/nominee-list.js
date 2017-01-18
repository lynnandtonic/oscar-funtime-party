import React from 'react';

export default function(props) {
  return (
    <div className="data-list">

      {props.nominees.map(nominee => {

        return (
          <div key={nominee.id} className="data-list-item">
            <div className="details">{nominee.name}</div>
            <div className="controls">
              {/*<button onClick={props.selectNomineeToWin.bind(null, nominee.id)}>Select</button>*/}
            </div>
          </div>
        );

      })}

    </div>
  );
}
