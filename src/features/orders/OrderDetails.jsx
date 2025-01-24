import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderDetail } from "../../services/order";

function OrderDetails() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOrderDetails() {
      setLoading(true);
      setError(null);
      try {
        const res = await getOrderDetail(orderId);
        setOrder(res);
      } catch (err) {
        setError("Failed to fetch order details.");
      } finally {
        setLoading(false);
      }
    }
    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-gray-600">Loading order details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-gray-600">Order not found.</div>
      </div>
    );
  }
  console.log(order);
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Details</h1>

        <div className="mb-6">
          <p className="text-lg font-medium text-gray-800">
            <span className="font-semibold">Order ID:</span> {order.id}
          </p>
          <p className="text-lg font-medium text-gray-800">
            <span className="font-semibold">Created At:</span>{" "}
            {order.created_at}
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Items</h2>
          <ul className="space-y-4">
            {order?.items?.map((item) => (
              <li
                key={item.id}
                className="border p-4 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-32 h-32 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="mt-2">
                      <span className="font-semibold text-gray-700">
                        Price:
                      </span>{" "}
                      ${item.price}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        Quantity:
                      </span>{" "}
                      {item.quantity}
                    </p>
                    <p className="font-semibold text-gray-800 mt-2">
                      Total Price: ${item.totalPrice}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
