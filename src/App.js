import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Landing } from "./components/Landing/Landing";
import { Authentication } from "./components/Authentication/Authentication";
import { Terms } from "./components/Legal/Terms";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Landing} />
        <Route path="/sign-up" exact component={Landing} />
        <Route path="/login" exact component={Authentication} />
        <Route path="/terms-and-conditions" exact component={Terms} />
      </Router>
    </div>
  );
}

export default App;
