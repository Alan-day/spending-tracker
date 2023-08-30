import React, { useEffect, useState } from "react";
import "./AddNewExpense.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Data from "./../../Data.json";
const AddNewExpense = () => {
  const [availableDates, setAvailableDates] = useState([]);

  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const defaultFormState = {
    spent: 0,
    category: "Personal",
    date: formattedDate,
    picture:
      "https://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Folders-OS-Personal-Metro-icon.png",
  };
  
  const [expense, setExpense] = useState(defaultFormState);
  useEffect(() => {
    setDate(formattedDate);
    handleAvailableDates();
  }, []);

  const handleValidation = () => {
    if (expense.date.slice(0, 2) > formattedDate.slice(0, 2)) {
      alert("Date cannot be in the future");
      return;
    }

    if (expense.spent <= 0) {
      alert("Amount must be greater than zero");
      return;
    }

    handleSubmit();
  };

  const handleAvailableDates = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

    // Generate all dates in the current month
    const dates = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const formattedDate = `${String(day).padStart(2, "0")}/${String(
        currentMonth
      ).padStart(2, "0")}/${currentYear}`;
      dates.push(formattedDate);
    }

    setAvailableDates(dates);
  };

  const handleSubmit = async () => {
    const myExpense = expense;
    const result = await fetch("http://localhost:8080/addExpense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myExpense),
    });

    if (result.ok) {
      alert("Expense added");
    } else {
      alert("Unable to add this expense");
    }
  };

  return (
    <>
      <div className="form-container">
        <h1 className="form-container__heading">Add new expense</h1>
        <form onSubmit={handleValidation}>
          <label>
            Amount
            <input
              value={expense.spent}
              className="form-container__element--amount"
              type="number" //prevents adding non-numerical input
              onInput={(event) =>
                setExpense({ ...expense, spent: event.target.value })
              }
            ></input>
          </label>

          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={expense.category}
            onInput={(event) =>
              setExpense({ ...expense, category: event.target.value })
            }
            className="form-container__element"
          >
            <option value="Personal">Personal</option>
            <option value="Going out">Going out</option>
            <option value="Groceries">Groceries</option>
            <option value="Bills">Bills</option>
          </select>

          <label>Date </label>
          <select
            id="date"
            value={expense.date}
            onInput={(event) =>
              setExpense({ ...expense, date: event.target.value })
            }
            className="form-container__element"
          >
            {availableDates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>

          <button type="submit" className="form-container__button">
            Submit
          </button>
        </form>
        <div className="navbar-container">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default AddNewExpense;
