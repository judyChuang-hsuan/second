import React from "react";
import { Link } from "react-router-dom";
import { data } from "../api";

const ProductListPage = () => {
  return (
    <div className="productlist">
      <h1>ProductList</h1>
      {data.map((d) => {
        return (
          <Link key={d.id} className="product" to={`/product/${d.id}`}>
            {d.name}
          </Link>
        );
      })}
    </div>
  );
};

export default ProductListPage;
