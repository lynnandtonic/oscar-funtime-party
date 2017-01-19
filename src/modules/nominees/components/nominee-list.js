import React from 'react';

export default function(props) {
  return (
    <div className="data-list">

      {props.nominees.map(nominee => {

        return (
          <div key={nominee.id}>
            <button className={ props.selectedKey === nominee.id ? 'active' : '' } onClick={() => props.onNomineeClicked(props.category, nominee.id)}>{nominee.name}</button>
          </div>
        );

      })}

    </div>
  );
}
