import {render} from 'react-dom';
import { StartPage } from './StartPage';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <StartPage />

          <Route path="/start" component={StartPage}/>
        </div>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));
