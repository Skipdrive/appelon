import { assignRoles } from '../database.js';
import { createGame } from '../database.js';
import { CreatePageView } from './CreatePageView.jsx';
import { joinGame } from '../database.js';
import React from 'react';

export class CreatePageContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      gameId: props.gameId,
    };

    this.roles = [];
  }

  handleStartClick() {
    console.log(this.roles);
  }

  handleCheckboxChange(e) {
    if (e.target.checked) {
        this.roles.push(e.target.id);
    } else {
      const idx = this.roles.indexOf(e.target.id);
      if (idx > -1) {
          this.roles.splice(idx, 1);
      }
    }
  }

  render() {
    return (
      <div>
        <CreatePageView
          handleStartClick={ () => this.handleStartClick() }
          handleCheckboxChange={ (e) => this.handleCheckboxChange(e) }
          gameId={this.props.match.params.gameId}
        />
      </div>
    );
  }

}
