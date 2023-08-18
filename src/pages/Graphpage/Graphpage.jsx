import React, { useEffect, useState } from "react";
import Graph from "../../Components/Graph/Graph";
import Navbar from "../../Components/Navbar/Navbar";
import { UserData } from "../../Data.js";
import "./Graphpage.scss";
const Graphpage = () => {
  const categories = ["Personal", "Bills", "Groceries", "Going out"];
  const [month, setMonth] = useState("");

  const spendingByDateAndCategory = {}; // empty object not array

  const currentDate = new Date();

  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");

  UserData.forEach((data) => {
    if (!spendingByDateAndCategory[data.date]) {
      spendingByDateAndCategory[data.date] = {};
      categories.forEach((category) => {
        spendingByDateAndCategory[data.date][category] = 0;
      });
    }
  });

  const filteredMonth = "08"; // Replace with the desired month

  console.log(spendingByDateAndCategory);

  const filteredSpendingPerMonth = Object.keys(spendingByDateAndCategory)
    .filter((date) => date.includes(filteredMonth)) // Filter based on the month
    .map((date) => ({
      date: date,
      categories: spendingByDateAndCategory[date],
    }));

    Object.keys(spendingByDateAndCategory).forEach(date => {
      if (date.startsWith(filteredMonth)) {
        filteredSpendingPerMonth[date] = { ...spendingByDateAndCategory[date] };
      }
    });
  console.log(filteredSpendingPerMonth);

  useEffect(() => {
    setMonth(currentMonth);
  }, []);

  UserData.forEach((data) => {
    filteredSpendingPerMonth[data.date][data.category] += data.spent;
  });

  const labels = Object.keys(filteredSpendingPerMonth);
  const datasets = categories.map(category => ({
    label: category,
    data: labels.map(date => filteredSpendingPerMonth[date][category] || 0),
  }));
  const uniqueDates = [...new Set(UserData.map((data) => data.date))];

  const userData = {
    labels: labels,
    datasets: datasets,
  };

  // console.log(UserData.map((data) => data.date));

  // switch (expression) {
  //   case x:
  //     // code block
  //     break;
  //   case y:
  //     // code block
  //     break;
  //   default:
  //   // code block
  // }

  return (
    <div className="graphpage-container">
      Graphpage
      <Graph chartData={userData} />
      <Navbar />
    </div>
  );
};

export default Graphpage;
