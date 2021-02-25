import React, { Component } from 'react';
import ReactDom from "react-dom";
import Quize from './Quize';

class Index extends Component {
  render() {
    return (
      <div>
        <Quize/>
      </div>
    );
  }
}

ReactDom.render(
  <Index />,
  document.getElementById("root")
);