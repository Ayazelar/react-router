import React, { Component } from 'react';
import Function from './components/Routes';
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Function name="Function"/>
      </BrowserRouter>
    );
  }
}

export default App;
