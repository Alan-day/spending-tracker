import React, { useEffect, useState } from "react";
import Graph from "../../Components/Graph/Graph";
import Navbar from "../../Components/Navbar/Navbar";
import { UserData } from "../../Data.js";
import "./Graphpage.scss";
const Graphpage = () => {
  const categories = ["Personal", "Bills", "Groceries", "Going out"];

  const [namedMonth, setNamedMonth] = useState("");
  const spendingByDateAndCategory = {}; // empty object not array

  const currentDate = new Date();

  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  const [month, setMonth] = useState(currentMonth);

  UserData.forEach((data) => {
    if (data.date.includes(`/${month}/`)) {
      if (!spendingByDateAndCategory[data.category]) {
        spendingByDateAndCategory[data.category] = 0; // Initialize spending for the category
      }
      spendingByDateAndCategory[data.category] += data.spent; // Accumulate spending amount
    }
  });

  useEffect(() => {
    handleMonths();
  }, [month]);

  const labels = Object.keys(spendingByDateAndCategory);
  const datasets = categories.map((category) => ({
    label: category,
    data: labels.map((category) => spendingByDateAndCategory[category] || 0),
  }));

  const userData = {
    labels: labels,
    datasets: datasets,
  };
  const handleButtonDecrease = () => {
    switch (month) {
      case "01":
        setMonth("12");
        break;
      case "02":
        setMonth("01");
        break;
      case "03":
        setMonth("02");
        break;
      case "04":
        setMonth("03");
        break;
      case "05":
        setMonth("04");
        break;
      case "06":
        setMonth("05");
        break;
      case "07":
        setMonth("06");
        break;
      case "08":
        setMonth("07");
        break;
      case "09":
        setMonth("08");
        break;
      case "10":
        setMonth("09");
        break;
      case "11":
        setMonth("10");
        break;
      case "12":
        setMonth("11");
        break;

      default:
        setNamedMonth("month");
    }
  };
  const handleButtonIncrease = () => {
    switch (month) {
      case "01":
        setMonth("02");
        break;
      case "02":
        setMonth("03");
        break;
      case "03":
        setMonth("04");
        break;
      case "04":
        setMonth("05");
        break;
      case "05":
        setMonth("06");
        break;
      case "06":
        setMonth("07");
        break;
      case "07":
        setMonth("08");
        break;
      case "08":
        setMonth("09");
        break;
      case "09":
        setMonth("10");
        break;
      case "10":
        setMonth("11");
        break;
      case "11":
        setMonth("12");
        break;
      case "12":
        setMonth("01");
        break;

      default:
        setNamedMonth("month");
    }
  };

  const handleMonths = () => {
    switch (month) {
      case "01":
        setNamedMonth("January");
        break;
      case "02":
        setNamedMonth("February");
        break;
      case "03":
        setNamedMonth("March");
        break;
      case "04":
        setNamedMonth("April");
        break;
      case "05":
        setNamedMonth("May");
        break;
      case "06":
        setNamedMonth("June");
        break;
      case "07":
        setNamedMonth("July");
        break;
      case "08":
        setNamedMonth("August");
        break;
      case "09":
        setNamedMonth("September");
        break;
      case "10":
        setNamedMonth("October");
        break;
      case "11":
        setNamedMonth("November");
        break;
      case "12":
        setNamedMonth("December");
        break;

      default:
        setNamedMonth("month");
    }
  };

  return (
    <div className="graphpage-container">
      <button onClick={handleButtonDecrease}>Previous Month</button>
      {namedMonth}
      <button onClick={handleButtonIncrease}>Next Month</button>
      <Graph chartData={userData} />
      <Navbar />
    </div>
  );
};

export default Graphpage;
