# toggle-switch
A React component that can be used in place of a checkbox to toggle between two states.

## Live demo
[Demo](http://rajatsehgal.github.io/toggle-switch/)

## Installation
```
npm install @rajatsehgal/toggle-switch --save
```

## Usage
```js
import React, { Component } from 'react';
import ToggleSwitch from '@rajatsehgal/toggle-switch/ToggleSwitch';

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
```
