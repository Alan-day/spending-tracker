import React, { useEffect, useState } from "react";
import Graph from "../../Components/Graph/Graph";
import Navbar from "../../Components/Navbar/Navbar";
import { UserData } from "../../Data.js";
import "./Graphpage.scss";
const Graphpage = () => {
  const categories = ["Personal", "Bills", "Groceries", "Going out"];
  const [month, setMonth] = useState("");
  const [namedMonth, setNamedMonth] = useState("");
  const spendingByDateAndCategory = {}; // empty object not array

  const currentDate = new Date();

  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");

  // UserData.forEach((data) => {
  //   if (
  //     !spendingByDateAndCategory[data.date])
  //    {
  //     spendingByDateAndCategory[data.date] = {};
  //     categories.forEach((category) => {
  //       spendingByDateAndCategory[data.date][category] = 0;
  //     });
  //   }
  // });

  UserData.forEach((data) => {
    if (data.date.includes(`/${month}/`)) {
      // Check if the date includes the filtered month
      if (!spendingByDateAndCategory[data.date]) {
        spendingByDateAndCategory[data.date] = {};
        categories.forEach((category) => {
          spendingByDateAndCategory[data.date][category] = 0;
        });
      }
      spendingByDateAndCategory[data.date][data.category] += data.spent;
    }
  });
  console.log(spendingByDateAndCategory);

  useEffect(() => {
    setMonth(currentMonth);
    handleMonths();
  }, [month]);

  const labels = Object.keys(spendingByDateAndCategory);
  const datasets = categories.map((category) => ({
    label: category,
    data: labels.map((date) => spendingByDateAndCategory[date][category] || 0),
  }));
  const uniqueDates = [...new Set(UserData.map((data) => data.date))];

  const userData = {
    labels: labels,
    datasets: datasets,
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
      {namedMonth}
      <Graph chartData={userData} />
      <Navbar />
    </div>
  );
};

export default Graphpage;
