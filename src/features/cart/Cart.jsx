import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCartContext } from "../../context/CartContext";
import { addOrder } from "../../services/order";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { cart, clearCart, getTotalQuantity, getTotalPrice } = useCartContext();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!cart.length) return <EmptyCart />;
  async function handelOrder() {
    const newOrder = {
      userId: user?.id,
      quantity: getTotalQuantity(),
      totalPrice: getTotalPrice(),
      items: cart,
    };
    await addOrder(newOrder);
    navigate("/orders");
  }

  return (
    <div className="max-w-3xl mb-14 mx-auto px-4 py-6">
      <div className="mb-6">
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      </div>

      <h2 className="text-2xl font-semibold mb-4 ">Your Cart</h2>

      <ul className="divide-y divide-stone-200 border-b mb-6">
        {cart.map((item) => (
          <li key={item.id} className="py-4 flex items-center justify-between">
            <CartItems item={item} />
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-3 sm:space-y-0">
        {user == null ? (
          <LinkButton to="/login">login</LinkButton>
        ) : (
          <Button
            onClick={handelOrder}
            type="primary"
            className="w-full sm:w-auto"
          >
            Order
          </Button>
        )}
        <Button
          type="secondary"
          onClick={clearCart}
          className="w-full sm:w-auto"
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
