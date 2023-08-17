import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const moveToExpense = () => {
    return navigate("/addExpense");
  };

  const moveToGraph = () => {
    return navigate("/graph");
  };

  const moveToHomepage = () => {
    return navigate("/homepage");
  };

  return (
    <>
      <div className="homepage-container">
        <button onClick={moveToExpense}>Add new expense</button>
        <button onClick={moveToGraph}>All expenses</button>
        <button onClick={moveToHomepage}>Homepage</button>
      </div>
    </>
  );
};

export default Navbar;
