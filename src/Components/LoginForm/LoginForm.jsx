import React from "react";
import "./LoginForm.scss";

const LoginForm = ({
  handleSubmit,
  email,
  password,
  loginInput,
  passwordInput,
}) => {
  return (
    <>
      <div className="login-form__container">
        <form>
          <label className="form__login">
            Email
            <input
              value={email}
              type="text"
              label="login"
              className="login-form__container--element"
              onInput={loginInput}
            />
          </label>
          <label className="form__password">
            Password
            <input
              value={password}
              type="password"
              label="password"
              className="login-form__container--element"
              onInput={passwordInput}
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
