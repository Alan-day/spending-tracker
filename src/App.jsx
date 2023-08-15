import "./App.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { React, useState } from "react";
function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          {user && (
            <>
              <Route path="/homepage" element={<Homepage />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
