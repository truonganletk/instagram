import './asset/scss/main.scss';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inbox" element={<Home />} />
        <Route path="/explore" element={<Home />} />
        <Route path="/accounts" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
