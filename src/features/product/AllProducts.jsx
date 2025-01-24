import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getAllProduct } from "../../services/product";

function AllProducts() {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    async function getProduct() {
      const res = await getAllProduct();
      setProducts(res);
    }
    getProduct();
  }, []);
  return <div>{<ProductList products={products} />}</div>;
}

export default AllProducts;
