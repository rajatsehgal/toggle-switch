import React, { Component } from 'react';
import ToggleSwitch from './ToggleSwitch';

class App extends Component {

  state = {
    status: false
  };

  handleToggleSwitchClick = () => {
    this.setState({ status: !this.state.status });
  };

  render() {
    return (
      <ToggleSwitch checked={this.state.status} onClick={this.handleToggleSwitchClick}/>
    );
  }
}

export default App;