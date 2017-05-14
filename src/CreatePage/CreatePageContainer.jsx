import { assignRoles } from '../database.js';
import { createGame } from '../database.js';
import { CreatePageView } from './CreatePageView.jsx';
import { joinGame } from '../database.js';
import React from 'react';

export class CreatePageContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      code: props.code,
    };
  }

  handleStartClick() {

  }

  render() {
    return (
      <div>
        <CreatePageView
          handleStartClick={ () => this.handleStartClick() }
          code={this.props.match.params.code}
        />
      </div>
    );
  }

}
