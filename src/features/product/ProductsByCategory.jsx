import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../../services/product";
import ProductList from "./ProductList";

function ProductsByCategory() {
  const parms = useParams();
  const [products, setProducts] = useState([]);
  useEffect(
    function () {
      async function getProduct() {
        const res = await getProductByCategory(parms.id);
        console.log(res);
        setProducts(res);
      }
      getProduct();
    },
    [parms.id]
  );

  return <div>{<ProductList products={products} />}</div>;
}

export default ProductsByCategory;
