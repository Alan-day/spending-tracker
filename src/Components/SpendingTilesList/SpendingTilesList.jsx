import React from "react";
import SpendingTile from "../SpendingTile/SpendingTile";
const SpendingTilesList = ({ userData }) => {
  const tiles = userData.map((element, index) => {
    return (
      <SpendingTile
        key={index}
        spent={element.spent}
        category={element.category}
        date={element.date}
        picture={element.picture}
      />
    );
  });

  return <div>{tiles}</div>;
};

export default SpendingTilesList;
