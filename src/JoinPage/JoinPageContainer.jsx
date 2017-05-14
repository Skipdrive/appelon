import React from 'react';
import { JoinPageView } from './JoinPageView.jsx';
import { createGame } from '../database.js';
import { joinGame } from '../database.js';

export class JoinPageContainer extends React.Component {

  render() {
    return (
      <div>
        <JoinPageView
          role="the Dude"
        />
      </div>
    );
  }

}
