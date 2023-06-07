import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Twittes from "./components/Twittes";
import Trends from "./components/Trends";
import NotFound from "./components/NotFound";
import LoginPage from "./components/LoginPage";
import TwitterSignupPage from "./components/TwitterSignupPage";
import { UserProvider } from './components/contextApi/UserContext';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="twitter">
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<TwitterSignupPage />} />

            {/* <PrivateRoute path="/" element={<Home />} /> */}
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

const Home = () => (
  <>
    <Sidebar />
    <Twittes />
    <Trends />
  </>
);

export default App;
