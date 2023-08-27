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
      <div className="navbar-container">
        <button className="navbar-container__button" onClick={moveToExpense}>
          &#128183; Add expense
        </button>
        <button className="navbar-container__button" onClick={moveToGraph}>
          &#128202; Bar chart
        </button>
        <button className="navbar-container__button" onClick={moveToHomepage}>
          &#127968; Homepage
        </button>
      </div>
    </>
  );
};

export default Navbar;
