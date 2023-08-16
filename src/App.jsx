import "./App.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { React, useState } from "react";
import Graph from "./Components/Graph/Graph";
import { UserData } from "./Data.js";

function App() {
  const [user, setUser] = useState(true);
  const [userData, setUserData] = useState({
    labels: [UserData.map((data) => data.date)], //list of all labels representing each bar
    datasets: [
      {
        label: "Spending",
        data: UserData.map((data) => data.spent),
      },
    ],
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          {user && (
            <>
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/addExpense" element={<Homepage />} />
              <Route path="/graph" element={<Graph chartData={userData} />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
