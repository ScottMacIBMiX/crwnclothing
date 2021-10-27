import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";

const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
