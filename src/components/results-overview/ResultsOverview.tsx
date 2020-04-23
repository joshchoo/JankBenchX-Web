import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { BenchmarkResults } from '../benchmark-results/BenchmarkResults';
import { ResultPage } from '../result-page/ResultPage';

export const ResultsOverview: React.FC<any> = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={BenchmarkResults} />
        <Route path={`${match.path}/:resultId`} component={ResultPage} />
      </Switch>
    </div>
  );
};
