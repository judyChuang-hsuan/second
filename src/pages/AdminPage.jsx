import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const AdminPage = () => {
  const user = useSelector((state) => state.currentuser.name);
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
  return (
    <>
      <div>AdminHome</div>
      <p>Hi, {user}</p>
      <button onClick={clickHandler}>Logout</button>
    </>
  );
};

export default AdminPage;
