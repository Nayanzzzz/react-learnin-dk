import { useDispatch, useSelector } from "react-redux";
import { IProductData, ProductData } from "../../../lib/products-data";
import {
  addToCart,
  removeFromAddToCart,
} from "../../../redux/reducer/produc-reducer";
import { RootState } from "../../../redux/store";

function ProductList() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {ProductData.map((v, i) => {
        return (
          <div
            key={`product-list-${i}`}
            className="bg-gray-100 p-5 rounded-md space-y-2"
          >
            <p>
              Name : <span className="font-bold text-red-500">{v.name}</span>
            </p>

            <AddAndRemoveCartButton item={v} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;

function AddAndRemoveCartButton({ item }: { item: IProductData }) {
  const dispatch = useDispatch();

  const selectedProduct = useSelector(
    (state: RootState) => state.selectedProduct
  );

  const checkIfIsAddToCart = selectedProduct.findIndex((v) => v.id == item.id);

  if (checkIfIsAddToCart == -1) {
    return (
      <button
        onClick={() => dispatch(addToCart(item))}
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
      >
        Click me to add to cart
      </button>
    );
  } else {
    return <button
      onClick={() => dispatch(removeFromAddToCart(item.id))}
      className="bg-red-500 text-white p-2 rounded-md cursor-pointer"
    >
      Click me to remove to cart
    </button>;
  }
}
