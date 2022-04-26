import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

const AdminPage = () => {
  const user=useSelector((state)=>state.currentuser.name);
  console.log(user);
  const history = useNavigate();
  const dispatch = useDispatch();
  const clearUser=useCallback(()=>{
    dispatch({type:"LOGOUT"})
  },[dispatch]);
  const clickHandler = () => {
    clearUser();
    sessionStorage.clear()
    history("/login");
  };
  return (
    <>
      <div>AdminHome</div>
      <p>{user}</p>
      <button onClick={clickHandler}>Logout</button>
    </>
  );
};

export default AdminPage;
