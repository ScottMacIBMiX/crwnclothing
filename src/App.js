import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";
import Login from "./pages/Login/Login";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  
  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {

      this.setState({currentUser: user})
      console.log(user);

    })

  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
