import { React, useState } from "react";
import SpendingTile from "../SpendingTile/SpendingTile";
const SpendingTilesList = ({ userData }) => {
  // const [picture, setPicture] = useState("");

  // switch (category) {
  //   case "Groceries":
  //     setPicture(
  //       "https://icons.veryicon.com/png/o/food--drinks/yoga-flat-icon/healthy-food.png"
  //     );
  //     break;
  //   case "Goingout":
  //     setPicture(
  //       "https://icons.veryicon.com/png/o/food--drinks/yoga-flat-icon/healthy-food.png"
  //     );
  //     break;
  // }

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
