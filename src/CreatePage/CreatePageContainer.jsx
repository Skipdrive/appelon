import React from 'react';
import { CreatePageView } from './CreatePageView.jsx';
import { createGame } from '../database.js';
import { joinGame } from '../database.js';
import { assignRoles } from '../database.js';

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
