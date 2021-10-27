import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
