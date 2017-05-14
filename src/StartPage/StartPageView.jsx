import React from 'react';

export const StartPageView = ({
  handleCodeChange,
  handleCreateClick,
  handleJoinClick,
  handleNameChange,
}) => {
  return (
      <div>
        <input placeholder="name" onChange={handleNameChange} /> <br />
        <input placeholder="group code" onChange={handleCodeChange} /><button onClick={handleJoinClick}>Join</button><br />
        <button onClick={handleCreateClick}>Create</button>
      </div>
  );
}
