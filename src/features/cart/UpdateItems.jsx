import { useCartContext } from "../../context/CartContext";
import Button from "../../ui/Button";

function UpdateItems({ item }) {
  const { increaseQuantity, decreseQuantity } = useCartContext();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => decreseQuantity(item.id)}>
        -
      </Button>
      <span className="text-sm font-medium">
        {item?.quantity ? item?.quantity : 0}
      </span>
      <Button type="round" onClick={() => increaseQuantity(item.id)}>
        +
      </Button>
    </div>
  );
}

export default UpdateItems;
