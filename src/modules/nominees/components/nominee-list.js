import React from 'react';

export default (props) => {
  return (
    <ul className="nominee-list">
      {props.nominees.map(nominee => {
        return (
          <li key={nominee.id} className={ props.selectedKey === nominee.id ? 'nominee pick' : 'nominee' } onClick={() => props.onNomineeClicked(props.category, nominee.id)}>
            <img src="https://upload.wikimedia.org/wikipedia/en/f/f3/Spotlight_(film)_poster.jpg" className="nominee-photo" role="presentation" />
            <h3 className="nominee-name">{nominee.name}</h3>
          </li>
        );

      })}

    </ul>
  );
}
