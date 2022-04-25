import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Redirect from="/" to="/home" />
        <Route path="/productlist" element={<ProductListPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
