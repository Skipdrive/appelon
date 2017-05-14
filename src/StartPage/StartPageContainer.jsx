import React from 'react';
import { StartPageView } from './StartPageView.jsx';
import { createGame } from '../database.js';
import { joinGame } from '../database.js';

export class StartPageContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gameId: ''
    };
  }

  handleNameChange(name) {
    this.setState({ name: name.target.value });
  }

  handleGameIdChange(gameId) {
    this.setState({ gameId: gameId.target.value });
  }

  handleJoinClick() {
    joinGame(this.state.name, this.state.gameId);
    this.props.history.push(`/info/`${this.state.name}`/${this.state.gameId}`);
  }

  handleCreateClick() {
    const newGameId = createGame(this.state.name);
    this.props.history.push(`/create/${newGameId}`);
  }

  render() {
    return (
      <div>
        <StartPageView
          handleNameChange={ (name) => this.handleNameChange(name) }
          handleGameIdChange={ (gameId) => this.handleGameIdChange(gameId) }
          handleJoinClick={ () => this.handleJoinClick() }
          handleCreateClick={ () => this.handleCreateClick() }
        />
      </div>
    );
  }

}
