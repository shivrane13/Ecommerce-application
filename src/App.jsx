import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import AllProducts from "./features/product/AllProducts";
import ProductsByCategory from "./features/product/ProductsByCategory";
import Cart from "./features/cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Login from "./features/Auth/Login";
import Signup from "./features/Auth/Signup";
import MyOrders from "./features/orders/MyOrders";
import OrderDetails from "./features/orders/OrderDetails";

function App() {
  return (
    <AuthProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<AllProducts />} />
              <Route path="category/:id" element={<ProductsByCategory />} />
              <Route path="cart" element={<Cart />} />
              <Route path="orders" element={<MyOrders />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="/order/:orderId" element={<OrderDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AuthProvider>
  );
}

export default App;
