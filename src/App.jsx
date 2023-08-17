import "./App.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { React, useState } from "react";
import Graph from "./Components/Graph/Graph";
import { UserData } from "./Data.js";

function App() {
  const [user, setUser] = useState(true);
  const categories = ["Personal", "Bills", "Groceries", "Going out"]; 

  
  const spendingByDateAndCategory = {};


  UserData.forEach((data) => {
    if (!spendingByDateAndCategory[data.date]) {
      spendingByDateAndCategory[data.date] = {};
      categories.forEach((category) => {
        spendingByDateAndCategory[data.date][category] = 0;
      });
    }
  });

  // Populate the dictionary with spending values
  UserData.forEach((data) => {
    spendingByDateAndCategory[data.date][data.category] += data.spent;
  });


  const labels = Object.keys(spendingByDateAndCategory);
  const datasets = categories.map((category) => ({
    label: category,
    data: labels.map((date) => spendingByDateAndCategory[date][category]),
  }));

  const userData = {
    labels: labels,
    datasets: datasets,
  };

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
