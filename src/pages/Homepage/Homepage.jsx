import { React, useNavigate } from "react";

const Homepage = () => {
  const navigate = useNavigate();

  const moveToExpense = () => {
    navigate("/addExpense");
  };

  const moveToGraph = () => {
    navigate("/graph");
  };
  return (
    <>
      <div className="homepage-container">
        <button onClick={moveToExpense}>Add new expense</button>
        <button onClick={moveToGraph}>All expenses</button>
      </div>
    </>
  );
};

export default Homepage;
