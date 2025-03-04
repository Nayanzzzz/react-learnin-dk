import React from "react";
import ProductNav from "./product-nav";
import ProductList from "./product-list";

function ProductPage() {
  return (
    <div className="p-10 space-y-2">
      <ProductNav />
      <ProductList />
    </div>
  );
}

export default ProductPage;
