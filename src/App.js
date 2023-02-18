import "./asset/css/index.css";
import "tw-elements";
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useContext } from "react";
import SettingChangePassword from "./pages/Setting/SettingChangePassword";
import SettingEdit from "./pages/Setting/SettingEdit";
import Explore from "./pages/Explore/Explore";
import Inbox from "./pages/Inbox/Inbox";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/Signup/SignUp";
import useAuthListener from "./hooks/use-auth-listener";
import Account from "./pages/Account/Account";
import Modal from "./components/Modal/Modal";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const { user } = useAuthListener();
  const { isReAuthenticated } = useContext(AuthContext);
  return (
    <>
      <Modal></Modal>

      <div className="bg-ig-secondary-background min-h-screen">
        <Router>
          <Routes>
            <Route
              path="*"
              element={
                user ? (
                  <Navigate to="/home" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/login"
              element={
                user && !isReAuthenticated ? (
                  <Navigate to="/" replace />
                ) : (
                  <SignIn />
                )
              }
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/" replace /> : <SignUp />}
            />
            {user && (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/:username" element={<Account />} />
                <Route path="/accounts/edit" element={<SettingEdit />} />
                <Route
                  path="/accounts/changepass"
                  element={<SettingChangePassword />}
                />
              </>
            )}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
