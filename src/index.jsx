import { CreatePage } from './CreatePage';
import { InfoPage } from './InfoPage';
import { StartPage } from './StartPage';
import {render} from 'react-dom';

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  browserHistory
} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/start" component={StartPage} />
          <Route path="/info/:playerName/:gameId" component={InfoPage} />
          <Route path="/create/:playerName/:gameId/" component={CreatePage} />
          <Redirect from="/" to="/start" />
        </div>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));
