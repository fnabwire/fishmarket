import React from "react";
import {
  FaFish,
  FaUserCircle,
  FaShoppingCart,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
} from "react-icons/fa";

const listings = [
  {
    id: 1,
    name: "Tilapia",
    price: "Ksh 350/kg",
    quantity: "20kg",
    image: "https://via.placeholder.com/150",
    seller: "Fisherman A",
  },
];

const recentOrders = [
  {
    id: 1,
    fish: "Nile Perch",
    quantity: "3kg",
    total: "Ksh 1050",
    status: "Pending",
  },
];

export default function BuyerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Welcome, Buyer Jane 👋</h2>
          <p className="text-gray-600">Check today’s listings and your order status below.</p>
        </div>

        {/* Buyer profile summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow border border-gray-100 col-span-1 md:col-span-3 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">
              <FaUserCircle />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Jane Doe</h3>
              <p className="text-sm text-gray-500">Regular Buyer | Member since 2024</p>
            </div>
          </div>
        </div>

        {/* Fish listings */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <FaFish className="text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold">Available Fish Listings</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((fish) => (
              <div
                key={fish.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-200 border border-gray-100"
              >
                <img
                  src={fish.image}
                  alt={fish.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-gray-800">{fish.name}</h4>
                  <p className="text-sm text-gray-600">Price: {fish.price}</p>
                  <p className="text-sm text-gray-600">Qty Available: {fish.quantity}</p>
                  <p className="text-sm text-gray-500 mt-1">Seller: {fish.seller}</p>
                  <button className="mt-4 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition duration-150">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent orders */}
        <section>
          <div className="flex items-center mb-4">
            <FaShoppingCart className="text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold">My Recent Orders</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recentOrders.map((order) => {
              let statusIcon;
              let statusClasses = "";

              if (order.status === "Pending") {
                statusIcon = <FaSpinner className="animate-spin" />;
                statusClasses = "bg-yellow-100 text-yellow-800";
              } else if (order.status === "Accepted") {
                statusIcon = <FaCheckCircle />;
                statusClasses = "bg-green-100 text-green-800";
              } else {
                statusIcon = <FaTimesCircle />;
                statusClasses = "bg-red-100 text-red-800";
              }

              return (
                <div
                  key={order.id}
                  className="bg-white p-4 rounded-xl shadow border border-gray-100"
                >
                  <p className="text-md font-medium">
                    Fish: <span className="font-bold">{order.fish}</span> | {order.quantity}
                  </p>
                  <p className="text-sm mt-1 text-gray-600">Total: {order.total}</p>
                  <p className="text-sm mt-2 font-semibold flex items-center gap-2">
                    Status:{" "}
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${statusClasses}`}>
                      {statusIcon}
                      <span className="ml-1">{order.status}</span>
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
