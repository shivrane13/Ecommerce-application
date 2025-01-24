import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import Button from "../../ui/Button";
import UpdateItems from "../cart/UpdateItems";

function Product({ product }) {
  const { cart, addToCart } = useCartContext();
  const currentItem = cart.find((item) => item.id === product.id);

  function handelClick() {
    const newProduct = { ...product, quantity: 1, totalPrice: product.price };
    addToCart(newProduct);
  }
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden border">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={product.category.image}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-600 mt-2">${product.price}</p>
      </div>
      <div className="p-4">
        {currentItem ? (
          <UpdateItems item={currentItem} />
        ) : (
          <Button onClick={handelClick}>Add To Cart</Button>
        )}
      </div>
    </div>
  );
}

export default Product;
