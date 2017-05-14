import React from 'react';
import { roles } from '../constants';

export const CreatePageView = ({
  code,
  handleStartClick,
  handleCheckboxChange
}) => {

  const roleDivs = [];
  Object.keys(roles).forEach((role) => {
    for (let i = 0; i < roles[role].max_count; i++) {
        roleDivs.push(
          <div>
            {role}<input onChange={handleCheckboxChange} type="checkbox" id={role} /><br />
          </div>
        );
    }
  });

  return (
      <div>
        Join Code: {code}<br /><br />
        {roleDivs}
        <br />
        <button onClick={handleStartClick}>start</button>
      </div>
  );
}
