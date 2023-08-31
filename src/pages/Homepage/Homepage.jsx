import { React } from "react";
import "./Homepage.scss";

import Navbar from "../../Components/Navbar/Navbar";

const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <h1 className="login-container__heading">Swi£t</h1>
        <p className="homepage-container__paragraph">
          Swift is an expense tracker application that allows you to see how you
          spend your money. When adding an expense you have a few categories to
          choose from: 'Personal', 'Groceries', 'Going Out' and 'Bills'.
        </p>
        <p className="homepage-container__paragraph">
          Choose 'Personal' for any expenses related to travelling, buying books
          and generic online shopping. Choose groceries when spending at a
          supermarket, select going out when paying for meals and drinks at
          restaurants/pubs and bills for any expenses related to subscriptions,
          payments for rent etc.
        </p>
        <Navbar />
      </div>
    </>
  );
};

export default Homepage;
