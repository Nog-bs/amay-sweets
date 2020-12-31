import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import { About, Home } from "./pages";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
