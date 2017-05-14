import React from 'react';

export const CreatePageView = ({
  joinCode,
  handleStartClick,
}) => {
  return (
      <div>
        Join Code: {joinCode}<br />
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
