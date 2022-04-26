import React, { useCallback } from "react";
import { Login } from "../api";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const LoginPage = () => {
  //USESELECTOR
  const value = useSelector((state) => ({
    user: state.login.user,
    password: state.login.password,
  }));
  const loggedIn = useSelector((state) => state.loggedIn);

  //DISPATCH
  const dispatch = useDispatch();
  const receiveToken = useCallback(() => {
    dispatch({ type: "RECEIVE_TOKEN" });
  }, [dispatch]);

  const login = useCallback(
    (name, value) => {
      dispatch({ type: "LOGIN", payload: { name, value } });
    },
    [dispatch]
  );

  const submitHandler = (e) => {
    e.preventDefault();
  };

  //偵測name&password
  const changeHandler = (e) => {
    login(e.target.name, e.target.value);
  };

  //取得token並存入至sessionStorage
  const getToken = async () => {
    try {
      let result = await Login();
      if (loggedIn) {
        sessionStorage.setItem("id", result.token);
      }
      receiveToken();
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = () => {
    getToken();
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="user">Name</label>
        <input
          name="user"
          value={value.user}
          onChange={(e) => changeHandler(e)}
          placeholder="userName"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={value.password}
          placeholder="password"
          onChange={(e) => changeHandler(e)}
        />
        <Link to={loggedIn ? "/admin" : "/login"} onClick={clickHandler}>
          Login
        </Link>
      </form>
    </>
  );
};

export default LoginPage;
