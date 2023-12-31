import React, { useState } from "react";
import "./SpendingTile.scss";

const SpendingTile = ({ spent, category, date, picture }) => {
  return (
    <div className="spending-tile">
      <img className="spending-tile--picture" src={picture}></img>
      <h1 className="spending-tile--category">{category}</h1>
      <h1 className="spending-tile--amount">£{spent}</h1>
      <h1 className="spending-tile--date">{date}</h1>
    </div>
  );
};

export default SpendingTile;
