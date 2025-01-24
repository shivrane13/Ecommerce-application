import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="py-3">
      <LinkButton to="/">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some Items :)
      </p>
    </div>
  );
}

export default EmptyCart;
