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
        <button className="homepage-container__button" onClick={moveToExpense}>
          £++
        </button>
        <button className="homepage-container__button" onClick={moveToGraph}>
          &#128202;
        </button>
        <button className="homepage-container__button" onClick={moveToHomepage}>
          &#127968;
        </button>
      </div>
    </>
  );
};

export default Navbar;
