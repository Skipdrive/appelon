import React from 'react';

export const InfoPageView = ({
  knownPlayers,
  // knownRoles, -- do something with this
  myRole,
}) => {
  return (
    <div>
      <div>I am: {myRole}</div>
      <div>The people I know are: {knownPlayers.join(', ')}</div>
    </div>
  );
}
