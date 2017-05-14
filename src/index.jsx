import {render} from 'react-dom';
import { StartPage } from './StartPage';
import { CreatePage } from './CreatePage';

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
          <Route path="/create/:code" component={CreatePage} />
          <Redirect from="/" to="/start" />
        </div>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));
