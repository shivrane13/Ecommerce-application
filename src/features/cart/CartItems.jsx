import { useCartContext } from "../../context/CartContext";
import Button from "../../ui/Button";
import UpdateItems from "./UpdateItems";

function CartItems({ item }) {
  const { deleteProductFromCart } = useCartContext();
  return (
    <div className="w-full flex items-center justify-between  py-4 border-b border-stone-200">
      <div className="flex items-center gap-4">
        <img
          src={item.category.image}
          alt={item.title}
          className="w-20 h-20 rounded object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-500">
            Price: <span className="font-semibold">${item.price}</span>
          </p>
          <p className="text-sm text-gray-500">
            Total: <span className="font-semibold">${item.totalPrice}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <UpdateItems item={item} />

        <Button
          type="danger"
          size="sm"
          onClick={() => deleteProductFromCart(item.id)}
          className="px-4 py-2 text-xs font-medium"
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItems;
