import React from 'react';

export const StartPageView = ({
  handleGameIdChange,
  handleCreateClick,
  handleJoinClick,
  handleNameChange,
}) => {
  return (
      <div>
        <input placeholder="name" onChange={handleNameChange} /> <br />
        <input placeholder="game id" onChange={handleGameIdChange} /><button onClick={handleJoinClick}>Join</button><br />
        <button onClick={handleCreateClick}>Create</button>
      </div>
  );
}
