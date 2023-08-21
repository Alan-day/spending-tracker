import "./App.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { React, useState } from "react";
import Graphpage from "./pages/Graphpage/Graphpage";
import AddNewExpense from "./pages/AddNewExpense/AddNewExpense";
function App() {
  const [user, setUser] = useState(true);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          {user && (
            <>
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/addExpense" element={<AddNewExpense />} />
              <Route path="/graph" element={<Graphpage />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
