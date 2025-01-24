import { ShoppingCart } from "lucide-react";
// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
// import { getAllCategories } from "../services/product";

function NavBar() {
  // const [categories, setCategories] = useState();
  // useEffect(function () {
  //   async function getCategories() {
  //     const res = await getAllCategories();
  //     console.log(res);
  //     setCategories(res);
  //   }
  //   getCategories();
  // }, []);
  const { user, signOut } = useAuth();
  console.log(user);
  const { getTotalQuantity } = useCartContext();
  const totalQuantity = getTotalQuantity();
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h3 className="text-2xl font-bold text-gray-800">Shopi</h3>
          <ul className="hidden md:flex space-x-6">
            <li>
              <NavLink
                to="/"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/1"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Clothes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/2"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/3"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Furnitures
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/28"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                Toys
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6">
            <li className="text-gray-600">{user?.email || ""}</li>
            <li>
              <NavLink
                to="/orders"
                className="text-gray-600 hover:text-gray-800 transition"
              >
                My Orders
              </NavLink>
            </li>
            <li>
              {user !== null ? (
                <p
                  onClick={signOut}
                  className="text-gray-600 hover:text-gray-800 transition"
                >
                  Logout
                </p>
              ) : (
                <NavLink
                  to="/login"
                  className="text-gray-600 hover:text-gray-800 transition"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
          <div className="relative">
            <NavLink to="cart">
              <ShoppingCart className="text-gray-600 w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="md:hidden bg-gray-100">
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <NavLink to="/" className="text-gray-600 hover:text-gray-800">
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/1"
              className="text-gray-600 hover:text-gray-800"
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/2"
              className="text-gray-600 hover:text-gray-800"
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/3"
              className="text-gray-600 hover:text-gray-800"
            >
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/28"
              className="text-gray-600 hover:text-gray-800"
            >
              Toys
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
