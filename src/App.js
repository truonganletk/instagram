import './asset/css/index.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import Setting from './pages/Setting/Setting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inbox" element={<Home />} />
        <Route path="/explore" element={<Home />} />
        <Route path="/accounts" element={<Setting />} />
      </Routes>
    </Router>
  );
}

export default App;
