import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import Login from "./pages/Login/Login";


function App() {
  return (
    <div className="App">
    <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
