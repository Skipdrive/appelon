import React from 'react';
import { InfoPageView } from './InfoPageView.jsx';

export class InfoPageContainer extends React.Component {

  constructor(props) {
    super(props);

    this.gameId = this.props.match.params;
    this.playerName = this.props.match.playerName;

    this.state = { role: '' };
  }

  componentWillMount(){
    zachFunc(this.gameId, this.playerName, (role) => {
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
