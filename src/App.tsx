import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BenchmarkResults } from './components/benchmark-results/BenchmarkResults';
import { ResultsOverview } from './components/results-overview/ResultsOverview';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BenchmarkResults} />
        <Route path="/results" component={ResultsOverview} />
      </Switch>
    </Router>
  );
}

export default App;
