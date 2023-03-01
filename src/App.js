import "./asset/css/index.css";
import "tw-elements";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { lazy, useContext, useRef } from "react";
import useAuthListener from "./hooks/useAuthListener";
import { AuthContext } from "./context/authContext/AuthContext";
import PageWithHeader from "./PageTemplates/PageWithHeader";
import { useDarkMode } from "./hooks/useDarkMode";
import { useResize } from "./hooks/useResize";
import Unsupport from "./pages/Unsupport/Unsupport";


const Home = lazy(() => import('./pages/Home/Home'))
const SignIn = lazy(() => import('./pages/SignIn/SignIn'))
const SignUp = lazy(() => import('./pages/SignUp/SignUp'))
const ExplorePeople = lazy(() => import('./pages/ExplorePeople/ExplorePeople'))
const Explore = lazy(() => import('./pages/Explore/Explore'))
const Inbox = lazy(() => import('./pages/Inbox/Inbox'))
const Account = lazy(() => import('./pages/Account/Account'))
const SettingChangePassword = lazy(() => import('./pages/Setting/SettingChangePassword'))
const SettingEdit = lazy(() => import('./pages/Setting/SettingEdit'))

function App() {
  const { user } = useAuthListener();
  useDarkMode();
  const { isReAuthenticated } = useContext(AuthContext);
  const ref = useRef(null);
  const { width } = useResize(ref);
  // console.log(width, height);
  return (
    <div ref={ref}>
      {width > 640 ?
        <div className=" min-h-screen">
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
                <Route path='' element={<PageWithHeader />}>
                  <Route path="" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/explore/people" element={<ExplorePeople />} />
                  <Route path="/inbox" element={<Inbox />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/:username" element={<Account />} />
                  <Route path="/accounts/edit" element={<SettingEdit />} />
                  <Route path="/accounts/changepass" element={<SettingChangePassword />}
                  />
                </Route>
              )}
            </Routes>
          </Router>
        </div> : <Unsupport />
      }
    </div>
  );
}

export default App;
