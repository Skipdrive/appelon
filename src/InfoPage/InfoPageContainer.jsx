import { InfoPageView } from './InfoPageView.jsx';
import { registerAssignmentCallback } from '../database';
import React from 'react';

export class InfoPageContainer extends React.Component {

  constructor(props) {
    super(props);

    this.gameId = this.props.match.params.gameId;
    this.playerName = this.props.match.params.playerName;

    this.state = { role: '' };
  }

  componentWillMount(){
    registerAssignmentCallback(this.playerName, this.gameId, (role) => {
      this.setState({ role });
    });
  }

  render() {
    return (
      <div>
        <InfoPageView
          role={this.state.role}
        />
      </div>
    );
  }

}
