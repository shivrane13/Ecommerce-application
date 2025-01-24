import { useEffect, useState } from "react";
import { getOrder } from "../../services/order";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function MyOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  if (user === null) {
    navigate("/login");
  }
  useEffect(
    function () {
      async function getOrders() {
        const res = await getOrder(user?.id);
        setOrders(res);
      }
      if (user?.id) {
        getOrders();
      }
    },
    [user?.id]
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h1>

        {orders.length > 0 ? (
          <ul className="space-y-4">
            {orders.map((order) => (
              <li
                key={order.id}
                className="flex justify-between items-center border p-4 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100"
              >
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    Date:{" "}
                    <span className="text-gray-600">{order.created_at}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Total Items:
                    </span>{" "}
                    {order.quantity}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Total Price:
                    </span>{" "}
                    ${order.totalPrice}
                  </p>
                </div>
                <Link
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  to={`/order/${order.id}`}
                >
                  Details
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">No orders found.</p>
        )}
      </div>
    </div>
  );
}

export default MyOrders;
