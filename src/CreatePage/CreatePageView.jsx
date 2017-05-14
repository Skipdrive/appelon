import React from 'react';
import { roles } from '../constants';

export const CreatePageView = ({
  code,
  handleStartClick,
}) => {

  const roleDivs = [];
  Object.keys(roles).forEach((role) => {
    for (let i = 0; i < roles[role].max_count; i++) {
        roleDivs.push(
          <div>
            {role}<input type="checkbox" id={role} /><br />
          </div>
        );
    }
  });

  return (
      <div>
        Join Code: {code}<br />
        {roleDivs}
        <button onClick={handleStartClick}>start</button>
      </div>
  );
}
