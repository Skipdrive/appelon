import React from 'react';
import { StartPageView } from './StartPageView.jsx';

export class StartPageContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      code: ''
    };
  }

  handleNameChange(name) {
    this.setState({ name: name.target.value });
  }

  handleCodeChange(code) {
    this.setState({ code: code.target.value });
  }

  handleJoinClick() {
    alert(`name: ${this.state.name},\ncode: ${this.state.code}`);
  }

  handleCreateClick() {
    alert(`name: ${this.state.name}`);
  }

  render() {
    return (
      <div>
        <StartPageView
          handleNameChange={ (name) => this.handleNameChange(name) }
          handleCodeChange={ (code) => this.handleCodeChange(code) }
          handleJoinClick={ () => this.handleJoinClick() }
          handleCreateClick={ () => this.handleCreateClick() }
        />
      </div>
    );
  }

}
