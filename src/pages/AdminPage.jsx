import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
const AdminPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch("LOGOUT");
    history.push("/");
  };
  return (
    <>
      <div>AdminHome</div>
      <button>Logout</button>
    </>
  );
};

export default AdminPage;
