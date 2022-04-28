import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const AdminPage = () => {
  const user = JSON.parse(sessionStorage.getItem("id"))
  console.log(user);
  const history = useNavigate();
  const dispatch = useDispatch();
  const clearUser = useCallback(() => {
    dispatch({ type: "LOGOUT" });
  }, [dispatch]);

  //clearuser and go back to loginPage
  const clickHandler = () => {
    clearUser();
    sessionStorage.clear();
    history("/login");
  };
  let user1=JSON.parse(sessionStorage.getItem("id"));
  return (
    <>
      <div>AdminHome</div>
      <p>Hi,  {user1.name} </p>
      <button onClick={clickHandler}>Logout</button>
    </>
  );
};

export default AdminPage;
