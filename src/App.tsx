import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';

const BENCHMARK_RESULTS = gql`
  {
    allResults {
      data {
        device_name
        device_model
        device_board
        device_board
        kernel_version
        fingerprint
        _ts
        results {
          test_name
          score
          jank_pct
          bad_frame_pct
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(BENCHMARK_RESULTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
