import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { BenchmarkResults } from "./components/benchmark-results/BenchmarkResults";
import { ResultsOverview } from "./components/results-overview/ResultsOverview";
import { Navbar } from "./components/navbar/Navbar";
import { NotFound } from "./components/not-found/NotFound";

import "./App.css";
import { FAQPage } from "./components/faq-page/FAQPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={BenchmarkResults} />
        <Route exact path="/faq" component={FAQPage} />
        <Route path="/results" component={ResultsOverview} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
