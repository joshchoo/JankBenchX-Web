import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./components/navbar/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>This project is now deprecated. Info: <a href="https://github.com/joshchoo/JankBenchX-Web">https://github.com/joshchoo/JankBenchX-Web</a></div>
      </div>
    </Router>
  );
}

export default App;
