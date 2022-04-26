import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <Link to="/productlist">ProductList</Link>
    </div>
  );
};

export default HomePage;
