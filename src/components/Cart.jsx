import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartCard = ({ fish, onRemove }) => {
  const total = fish.pricePerKg * fish.quantity;

  return (
    <div className="absolute right-0 w-full lg:w-2/5 border border-gray-200 rounded-lg overflow-hidden shadow-md mb-4 flex flex-col sm:flex-row bg-white transition hover:shadow-lg">
      {/* Fish Image */}
      <img
        src={fish.image}
        alt={fish.name}
        className="w-full sm:w-24 h-40 sm:h-auto object-cover"
      />

      {/* Info Section */}
      <div className="flex-grow p-4">
        <h2 className="text-lg font-semibold">{fish.name}</h2>
        <p className="text-sm text-gray-600 mb-1">From: {fish.fisherman}</p>
        <p className="text-sm">Qty: {fish.quantity} kg</p>
        <p className="text-sm text-gray-700">
          Ksh {fish.pricePerKg}/kg —{" "}
          <span className="font-semibold">Total: Ksh {total}</span>
        </p>
      </div>

      {/* Remove Button */}
      <div className="flex justify-end items-start p-4 sm:p-2">
        <button
          onClick={() => onRemove(fish.id)}
          className="text-red-600 hover:text-red-800"
          title="Remove from cart"
        >
          <FontAwesomeIcon icon={faTrashAlt} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
