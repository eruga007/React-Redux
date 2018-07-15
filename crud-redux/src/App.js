import React, { Component } from "react";
import CommentForm from "./CommnetForm";
import ShowComment from "./ShowComment";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Chattrin JJ</h1>
        <CommentForm />
        <ShowComment />
      </div>
    );
  }
}

export default App;
