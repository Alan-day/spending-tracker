import React, { useEffect, useState } from "react";
import "./AddNewExpense.scss";
import Navbar from "../../Components/Navbar/Navbar";
const AddNewExpense = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [expense, setExpense] = useState("");

  const [date, setDate] = useState("");
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  useEffect(() => {
    setDate(formattedDate);
  }, []);

  const handleValidation = (event) => {
    event.preventDefault();

    if (amount <= 0) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit();
  };

  const handleSubmit = async () => {
    const expense = { amount, category, date };
    const result = await fetch("http://localhost:8080/addExpense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });

    if (result.ok) {
      alert("Expense added");
    }
  };

  return (
    <>
      <div className="form-container">
        Add new expense
        <form onSubmit={handleValidation}>
          <label>
            Amount
            <input
              className="form-container--element"
              type="number"
              onInput={(event) =>
                setExpense({ ...expense, amount: event.target.value })
              }
              onClick={handleSubmit}
            ></input>
          </label>

          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onInput={(event) =>
              setExpense({ ...expense, category: event.target.value })
            }
            className="form-container--element"
          >
            <option value="Personal">Personal</option>
            <option value="Going out">Going out</option>
            <option value="Groceries">Groceries</option>
            <option value="Bills">Bills</option>
          </select>

          <label>
            Date
            <input
              className="form-container--element"
              type="text"
              value={date}
              onInput={(event) =>
                setExpense({ ...expense, date: event.target.value })
              }
              onClick={handleSubmit}
            ></input>
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className="navbar-container">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default AddNewExpense;
