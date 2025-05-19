// import { useFishList } from "../contexts/FishListContext";

import { useContext } from "react";
import { useFishList } from "../contexts/FishListContext";
import { CartContext } from "../contexts/CartContext";
import { supabase } from "../supabaseClient";

export default function FishListings() {
  
  // const getName = async (id) => {
  //   const { data } = await supabase
  //         .from("profiles")
  //         .select("*")
  //         .eq("id", id)
  //         .single();
  //   return data?.name;
  // }
  
  const {
    fishList,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedLocation,
    setSelectedLocation,
    allFish,
  } = useFishList();

  // Dynamically get all locations from unfiltered data
  const locations = [
    ...new Set(allFish.map((f) => f.location).filter(Boolean)),
  ];

  if (loading) return <p>Loading fish...</p>;
  if (error) return <p>Error: {error}</p>;

  const { addToCart } = useContext(CartContext);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Fish Listings</h1>
      <p className="text-gray-600 mb-6">
        Browse fresh fish directly from local fishermen
      </p>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search fish name..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <div className="flex gap-2 items-center">
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="border px-3 py-2 rounded w-full sm:w-1/2"
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-4 text-sm text-gray-500">
        Showing {fishList.length} of {fishList.length} listings
      </p>
      
      {fishList.length === 0 ? (
        <p>No fish found for the selected filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fishList.map((fish, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col"
            >
              <img
                src={fish.image_url}
                alt={fish.name}
                className="w-full h-40 object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
              />
              <div className="p-4 flex-grow">
                <h2 className="text-lg font-semibold">{fish.fish_name}</h2>
                <p className="text-sm text-gray-600">By {fish.mvuvi_name}</p>
                <p className="text-sm text-gray-800 mt-1">
                  Price:{" "}
                  <span className="font-medium">Ksh {fish.price}/kg</span>
                </p>
                <p className="text-sm text-gray-800">Qty: {fish.quantity}kg</p>
              </div>
              <div className="px-4 pb-4">
                <button
                  onClick={() => addToCart(fish)}
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 cursor-pointer"
                >
                  <i className="fas fa-cart-plus mr-2"></i> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
