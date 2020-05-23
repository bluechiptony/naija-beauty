import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Landing, NavigationBar, Footer } from "./components/Landing/Landing";
import { Authentication, SignUp } from "./components/Authentication/Authentication";
import { Home } from "./components/Landing/Landing";
import { Terms } from "./components/Legal/Terms";
import { Contestants } from "./components/Contests/Contestant";

function App() {
  const showNavBar = true;
  return (
    <div className="App">
      <Router>
        {showNavBar && <NavigationBar />}
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/contestants/:contest" exact component={Contestants} />
        <Route path="/login" exact component={Authentication} />
        <Route path="/terms-and-conditions" exact component={Terms} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
