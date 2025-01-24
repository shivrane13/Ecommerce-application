import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

function CartOverview() {
  const { getTotalQuantity, getTotalPrice } = useCartContext();
  const totalCartQuantity = getTotalQuantity();
  const totalCartPrice = getTotalPrice();

  if (!totalCartQuantity) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} Items</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
