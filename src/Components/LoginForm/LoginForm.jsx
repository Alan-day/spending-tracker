import React from "react";
import "./LoginForm.scss";

const LoginForm = ({ handleSubmit, login, password }) => {
  return (
    <>
      <div className="login-form__container">
        <form>
          <label className="form__login">
            Email
            <input
              value={login}
              type="text"
              label="login"
              className="login-form__container--element"
            />
          </label>
          <label className="form__password">
            Password
            <input
              value={password}
              type="text"
              label="password"
              className="login-form__container--element"
            />
          </label>
        </form>
        <button
          className="login-form__container--button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default LoginForm;
