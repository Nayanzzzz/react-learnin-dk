import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

function ProductNav() {

    const selectedProduct = useSelector((state:RootState)=>state.selectedProduct)

  return <div>

    <p>Number of product add in cart is - {selectedProduct.length}</p>
  </div>;
}

export default ProductNav;
