import React from 'react';
import { StartPageView } from './StartPageView.jsx';
import { createGame } from '../database.js';
import { joinGame } from '../database.js';
import { assignRoles } from '../database.js';

export class StartPageContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      code: ''
    };
  }

  handleNameChange(name) {
    this.setState({ name: name.target.value });
  }

  handleCodeChange(code) {
    this.setState({ code: code.target.value });
  }

  handleJoinClick() {
    joinGame(this.state.name, this.state.code);
  }

  handleCreateClick() {
    createGame(this.state.name);
  }

  render() {
    return (
      <div>
        <StartPageView
          handleNameChange={ (name) => this.handleNameChange(name) }
          handleCodeChange={ (code) => this.handleCodeChange(code) }
          handleJoinClick={ () => this.handleJoinClick() }
          handleCreateClick={ () => this.handleCreateClick() }
        />
      </div>
    );
  }

}
