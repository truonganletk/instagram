import './asset/css/index.css';
import 'tw-elements';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import React from 'react';
import SettingChangePassword from './pages/Setting/SettingChangePassword';
import SettingEdit from './pages/Setting/SettingEdit';
import Explore from './pages/Explore/Explore';
import Inbox from './pages/Inbox/Inbox';
import Account from './pages/Account/Account';
import Signin from './pages/Signin/signin';
import Signup from './pages/Signup/signup';

function App() {
  return (
    <div className='bg-ig-secondary-background min-h-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/accounts" element={<Account />} />
          <Route path="/accounts/edit" element={<SettingEdit />} />
          <Route path="/accounts/changepass" element={<SettingChangePassword />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
