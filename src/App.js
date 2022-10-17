import './asset/css/index.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import React from 'react';
import SettingChangePassword from './pages/Setting/SettingChangePassword';
import SettingEdit from './pages/Setting/SettingEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inbox" element={<Home />} />
        <Route path="/explore" element={<Home />} />
        <Route path="/accounts" element={<Navigate to="/accounts/edit" replace={true} />} />
        <Route path="/accounts/edit" element={<SettingEdit />} />
        <Route path="/accounts/changepass" element={<SettingChangePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
