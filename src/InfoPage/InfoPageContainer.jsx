import { InfoPageView } from './InfoPageView.jsx';
import { registerAssignmentCallback } from '../database';
import { roles } from '../constants';
import React from 'react';

export class InfoPageContainer extends React.Component {

  constructor(props) {
    super(props);

    this.gameId = this.props.match.params.gameId;
    this.playerName = this.props.match.params.playerName;

    this.state = { role: '', knownRoles: [], knownPlayers: [] };
  }

  componentWillMount(){
    const that = this;
    registerAssignmentCallback(this.gameId, (playersToRoles) => {

      const rolesToPlayers = {};
      Object.keys(playersToRoles).forEach((player) => {
        rolesToPlayers[playersToRoles[player]] = player;
      });

      const myRole = playersToRoles[that.playerName];
      const knownRoles = roles[myRole].knows;

      const knownPlayers = [];
      knownRoles.forEach(role => {
        if (rolesToPlayers[role]) knownPlayers.push(rolesToPlayers[role])
      });

      this.setState({
        role: myRole,
        knownRoles,
        knownPlayers
      });
    });
  }

  render() {
    return (
      <div>
        <InfoPageView
          myRole={this.state.role}
          knownRoles={this.state.knownRoles}
          knownPlayers={this.state.knownPlayers}
        />
      </div>
    );
  }

}
