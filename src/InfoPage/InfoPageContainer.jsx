import React from 'react';
import { InfoPageView } from './InfoPageView.jsx';
import { createGame } from '../database.js';
import { joinGame } from '../database.js';

export class InfoPageContainer extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <InfoPageView
          role="the Dude"
        />
      </div>
    );
  }

}
