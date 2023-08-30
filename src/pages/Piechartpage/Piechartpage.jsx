import { React, useState, useEffect } from "react";
import Navbar from "./../../Components/Navbar/Navbar.jsx";
import { Pie } from "react-chartjs-2";
import Data from "../../Data.json";
import "chartjs-plugin-datalabels";

const Piechartpage = () => {
  const [spendingByCategory, setSpendingByCategory] = useState({});
  const [namedMonth, setNamedMonth] = useState("");
  const currentDate = new Date();
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  const [month, setMonth] = useState(currentMonth);

  useEffect(() => {
    handleMonths();
    const updatedSpendingByCategory = {};

    Data.forEach((data) => {
      if (data.date.includes(`/${month}/`)) {
        if (!updatedSpendingByCategory[data.category]) {
          updatedSpendingByCategory[data.category] = 0;
        }
        updatedSpendingByCategory[data.category] += data.spent;
      }
    });

    setSpendingByCategory(updatedSpendingByCategory);
  }, [month]);

  const labels = Object.keys(spendingByCategory);
  const datasets = [
    {
      label: "Monthly expenditure",
      data: labels.map((category) => spendingByCategory[category] || 0),
      backgroundColor: ["blue", "red", "orange", "purple"],
    },
  ];

  const userData = {
    labels: labels,
    datasets: datasets,
  };

  const listData = [];
  for (const data of Data) {
    if (data.date.includes(`/${month}/`)) {
      listData.push(data);
    }
  }
  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
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
    <div>
      <h2>Spending by category</h2>
      <h1>{namedMonth}</h1>
      <Pie data={userData} options={options} />
      <Navbar />
    </div>
  );
};

export default Piechartpage;
