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
  const [picture, setPicture] = useState("");

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

  const handleCategoryPicture = (category) => {
    // still having errors
    switch (category) {
      case "Groceries":
        setPicture(
          "https://icons.veryicon.com/png/o/food--drinks/yoga-flat-icon/healthy-food.png"
        );
        break;
      case "Going out":
        setPicture(
          "https://icons.iconarchive.com/icons/google/noto-emoji-activities/256/52707-party-popper-icon.png"
        );
        break;
      case "Personal":
        setPicture(
          "https://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Folders-OS-Personal-Metro-icon.png"
        );
        break;
      case "Bills":
        setPicture(
          "https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/256/Receipt-3d-icon.png"
        );
        break;
      default:
        setPicture(
          "https://static.vecteezy.com/system/resources/previews/005/720/180/non_2x/pound-icon-british-currency-symbol-illustration-coin-symbol-free-vector.jpg"
        );
        break;
    }
  };

  const handleValidation = () => {
    handleCategoryPicture(expense.category);

    if (expense.date.slice(0, 2) > formattedDate.slice(0, 2)) {
      // exception handler I used in case of setting a date in the future
      alert("Date cannot be in the future");
      return;
    }

    if (expense.spent <= 0) {
      // prevents default input
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

    // Generate all dates in the current month for the dropdown menu
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
              type="text" //prevents adding non-numerical input
              onChange={(event) => {
                const inputText = event.target.value;

                // Allowed the input to be empty or match the desired format
                const validInput =
                  inputText === "" || /^\d+(\.\d{0,2})?$/.test(inputText); // reg ex for 2 decimal numbers after the dot

                if (validInput) {
                  setExpense({ ...expense, spent: inputText });
                }
              }}
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

          <button className="form-container__button">Submit</button>
        </form>
        <div className="navbar-container">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default AddNewExpense;
