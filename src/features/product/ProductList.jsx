import { useEffect, useState } from "react";
import Product from "./Product";

function ProductList({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");
  useEffect(
    function () {
      const filterd = products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filterd);

      let sorted = [...filterd];
      if (sortOption === "price") {
        sorted.sort((a, b) => a.price - b.price);
      } else if (sortOption === "price-desc") {
        sorted.sort((a, b) => b.price - a.price);
      } else if (sortOption === "name") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortOption === "name-desc") {
        sorted.sort((a, b) => b.title.localeCompare(a.title));
      }

      setFilteredProducts(sorted);
    },
    [products, searchText, sortOption]
  );

  return (
    <div>
      <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full sm:w-2/3 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search products..."
        />
        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full sm:w-1/3 px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="price">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64 text-gray-600">
          <p className="text-lg font-semibold">
            No products available at the moment.
          </p>
          <p className="text-sm text-gray-500">
            Check back later or explore other categories.
          </p>
        </div>
      )}
    </div>
  );

  // if (filteredProducts.length > 0) {
  //   return (
  //     <div>
  //       <div className="p-4">
  //         <input
  //           type="text"
  //           value={searchText}
  //           onChange={(e) => setSearchText(e.target.value)}
  //           className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  //           placeholder="Search products..."
  //         />
  //       </div>
  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
  //         {filteredProducts.map((product) => (
  //           <Product key={product.id} product={product} />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-64 text-gray-600">
  //       <p className="text-lg font-semibold">
  //         No products available at the moment.
  //       </p>
  //       <p className="text-sm text-gray-500">
  //         Check back later or explore other categories.
  //       </p>
  //     </div>
  //   );
  // }
}

export default ProductList;
