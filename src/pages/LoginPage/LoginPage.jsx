import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase.js";
import "./LoginPage.scss";

const LoginPage = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);

  const navigate = useNavigate();

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const hideError = () => {
    setErrorMessage(!errorMessage);
  };
  const handleSetEmail = (e) => {
    setEmail(e.target.value);

    if (!e.target.value.includes("@" && ".")) {
      setEmailErrorMessage(true);
    } else {
      setEmailErrorMessage(false);
    }
  };

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate("/homepage");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(!errorMessage);
      });
  };
  console.log(email);
  return (
    <div className="login-container">
      <h1 className="login-container__heading">£wift</h1>
      <LoginForm
        handleSubmit={handleSubmit}
        password={password}
        email={email}
        loginInput={handleSetEmail}
        passwordInput={handleSetPassword}
      />

      {emailErrorMessage && (
        <div className="displayMessage">
          <h1 className="heading">Please enter a valid email</h1>
          <button className="login-container__button" onClick={hideError}>
            Try again
          </button>
        </div>
      )}

      {errorMessage && (
        <div className="displayMessage">
          <h1 className="heading">User not found</h1>
          <button className="login-container__button" onClick={hideError}>
            Try again
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
