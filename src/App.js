import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Twittes from "./components/Twittes";
import Trends from "./components/Trends";
import NotFound from "./components/NotFound";
import LoginPage from "./components/LoginPage";
import TwitterSignupPage from "./components/TwitterSignupPage";
import { UserProvider } from './components/contextApi/UserContext';

function App() {
  return (
    <div className="twitter">
      <Router>
        <UserProvider>
          <Routes>
            <Route exact path="/" element={
              <>
                {/* <Sidebar />
              <Twittes />
              <Trends /> */}
                <LoginPage />
              </>
            }></Route>
            <Route exact path="/signup" element={
              <>
                {/* <Sidebar />
              <Twittes />
              <Trends /> */}
                <TwitterSignupPage />
              </>
            }></Route>
            <Route exact path="/home" element={
              <>
                <Sidebar />
                <Twittes />
                <Trends />
              </>
            }></Route>
            {/* <Route element={<NotFound />}></Route> */}
            <Route path="*" element={<NotFound />} />
            {/* <Route exact path="/polls" element={<Polls />}></Route>
          <Route exact path="/polls/:userId" element={<Votes />}></Route> */}
          </Routes>
        </UserProvider>
      </Router>

    </div>

  );
}

export default App;
