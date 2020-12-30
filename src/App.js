import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Gallery } from "./components";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Gallery} />
      </Switch>
    </Router>
  );
};

export default App;
