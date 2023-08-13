import React from "react";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <>
      <div className="login-form__container">
        <form>
          <input
            type="text"
            label="login"
            className="container--element"
          ></input>
          <input
            type="text"
            label="password"
            className="container--element"
          ></input>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
