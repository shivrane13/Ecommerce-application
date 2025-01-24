import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function clearCart() {
    setCart([]);
  }

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function deleteProductFromCart(id) {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  }

  function increaseQuantity(id) {
    const product = cart.find((product) => product.id === id);
    product.quantity++;
    product.totalPrice = product.price * product.quantity;
    setCart([...cart]);
  }

  function decreseQuantity(id) {
    const product = cart.find((product) => product.id === id);
    product.quantity--;
    product.totalPrice = product.price * product.quantity;
    if (product.quantity < 1) {
      deleteProductFromCart(id);
    } else {
      setCart([...cart]);
    }
  }

  function getTotalQuantity() {
    const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    return quantity;
  }

  function getTotalPrice() {
    const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    return totalPrice;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteProductFromCart,
        increaseQuantity,
        decreseQuantity,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCartContext() {
  return useContext(CartContext);
}

export { CartContextProvider, useCartContext };
