/* Import package components */
import React from "react";
import "./App.css";

/* Import app components */
import TestMobx from "./test/TestMobx";
import TestHooks from "./test/TestHooks";

class App extends React.Component {
  render() {
    return (
      <>
        <TestHooks />
        {/* <TestMobx /> */}
      </>
    );
  }
}
export default App;
