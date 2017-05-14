import React from 'react';

export const CreatePageView = ({
  code,
  handleStartClick,
}) => {
  return (
      <div>
        Join Code: {code}<br />
        <div>
          character1: <input type="checkbox" /><br />
          character2: <input type="checkbox" /><br />
          character3: <input type="checkbox" /><br />
          character4: <input type="checkbox" /><br />
        </div>
        <button onClick={handleStartClick}>start</button>
      </div>
  );
}
