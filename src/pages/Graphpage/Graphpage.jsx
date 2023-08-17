import React from "react";
import Graph from "../../Components/Graph/Graph";
import { Navbar } from "react-bootstrap";
import { UserData } from "./Data.js";

const Graphpage = () => {
  return (
    <div>
      Graphpage
      <Graph chartData={userData} />
      <Navbar />
    </div>
  );
};

export default Graphpage;
