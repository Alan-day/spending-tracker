import React, { useEffect, useState } from "react";
import Graph from "../../Components/Graph/Graph";
import Navbar from "../../Components/Navbar/Navbar";
import Data from "../../Data.json";
import "./Graphpage.scss";
import SpendingTilesList from "../../Components/SpendingTilesList/SpendingTilesList";

const Graphpage = () => {
  const [namedMonth, setNamedMonth] = useState("");
  const [total, setTotal] = useState("");
  const [spendingByCategory, setSpendingByCategory] = useState({});

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
    totalSpending();
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
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const totalSpending = () => {
    let total = 0;
    listData.map((element) => {
      total += element.spent;
    });
    const truncatedTotal = parseFloat(total.toFixed(2));
    setTotal("£" + truncatedTotal);
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
      <div className="graphpage-container__month"> {namedMonth}</div>
      <div className="graphpage-container__graph">
        <Graph chartData={userData} options={options} />
      </div>
      <div className="graphpage-container__total">Total: {total}</div>
      <button
        className="graphpage-container__button"
        onClick={handleButtonDecrease}
      >
        &#11164; Previous month
      </button>
      <button
        className="graphpage-container__button"
        onClick={handleButtonIncrease}
      >
        Next month &#11166;
      </button>
      <div className="tiles-container">
        <SpendingTilesList userData={listData} />
      </div>

      <Navbar />
    </div>
  );
};

export default Graphpage;
