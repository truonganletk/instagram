import './asset/css/index.css';
import 'tw-elements';
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
import Explore from './pages/Explore/Explore';
import Inbox from './pages/Inbox/Inbox';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignIn/SignUp';
import useAuthListener from './hooks/use-auth-listener';
function App() {
  const { user } = useAuthListener();
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Router>
        <Routes>
          <Route path="*" element={user ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />} />
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <SignIn />} />
          <Route path="/signup" element={user ? <Navigate to="/" replace /> : <SignUp />} />
          {user && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/accounts" element={<Navigate to="/accounts/edit" replace={true} />} />
              <Route path="/accounts/edit" element={<SettingEdit />} />
              <Route path="/accounts/changepass" element={<SettingChangePassword />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
