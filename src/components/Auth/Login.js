import React, { useState } from "react";
import loginImage from "../../assets/images/login.png";
import { Link } from "react-router-dom";
import "./Auth.scss";
import axios from "axios";

import AuthService from "../../services/authService";
import { login } from "../../store/actions/auth";

import { useDispatch } from "react-redux";

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("john.doe@gmail.com");
  const [password, setPassword] = useState("secret");

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }, history));

    // dispatch(login({ email, password })).then(() => history.push("/"));

    // AuthService.login({ email, password }).then((res) => console.log(res));
    // axios
    //   .post("http://localhost:8000/login", { email, password })
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });

    // console.log({ email, password });
  };
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={loginImage} alt="login" />
          </div>
          <div id="form-section">
            <h2>Welcome back</h2>
            <form onSubmit={submitForm}>
              <div className="input-field mb-1">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  value={email}
                  required="required"
                  type="text"
                ></input>
              </div>
              <div className="input-field mb-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  value={password}
                  required="required"
                  type="password"
                ></input>
              </div>

              <button>LOGIN</button>
            </form>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
