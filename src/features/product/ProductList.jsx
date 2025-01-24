import { useState } from "react";
import Product from "./Product";

function ProductList({ products }) {
  if (products.length > 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-600">
        <p className="text-lg font-semibold">
          No products available at the moment.
        </p>
        <p className="text-sm text-gray-500">
          Check back later or explore other categories.
        </p>
      </div>
    );
  }
}

export default ProductList;
