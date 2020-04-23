import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BenchmarkResults } from './components/benchmark-results/BenchmarkResults';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BenchmarkResults} />
      </Switch>
    </Router>
  );
}

export default App;
