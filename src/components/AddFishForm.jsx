import React, { useState, useEffect } from "react";
import { FaFish, FaCamera, FaMapMarkerAlt } from "react-icons/fa";
import { userAuth } from "../contexts/AuthContext";
import { supabase } from "../supabaseClient";
import { useFishList } from "../contexts/FishListContext";

const AddFishForm = () => {
  const [preview, setPreview] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const {refetch} = useFishList();
  const { loggedInUser } = userAuth();
  const [formData, setFormData] = useState({
    fishName: "",
    description: "",
    price: "",
    quantity: "",
    image: null,
    location: "",
    status: "Available",
    // Assuming loggedInUser has an id property
    mvuviId: loggedInUser?.id,
    mvuvi_name: "",
  });

  //get the name of the logged in user
  const getName = async () => {
    const { data: name } = await supabase
      .from("profiles")
      .select("name")
      .eq("id", loggedInUser?.id)
      .single();
      console.log("Name of the logged in user:", name);
    return name;
  };
  

  // Auto-fetch geolocation on mount
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
          setFormData((prev) => ({ ...prev, location: coords }));
          setLoadingLocation(false);
        },
        () => {
          setFormData((prev) => ({
            ...prev,
            location: "Location not available",
          }));
          setLoadingLocation(false);
        }
      );
    }
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle image preview
  useEffect(() => {
    if (formData.image) {
      const objectUrl = URL.createObjectURL(formData.image);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl); // Cleanup
    }
  }, [formData.image]);

  // // Submit form
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Submit logic goes here
  //   console.log('Submitting:', formData);
  //   alert('Fish added successfully!');
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setUploading(true);
    // setMessage("");
    console.log("Submitting fish data", formData);

    let imageUrl = null;

    // Upload image to Supabase Storage
    if (formData.image) {
      const { data, error } = await supabase.storage
        .from("fish-images")
        .upload(`public${Date.now()}_${formData.image.name}`, formData.image, {
          contentType: formData.image.type,
        });

      if (error) {
        console.error("Error uploading image:", error.message);
        // setMessage("Image upload failed");
        // setUploading(false);
        return;
      }

      imageUrl = `${
        import.meta.env.VITE_SUPABASE_URL
      }/storage/v1/object/public/fish-images/${data.path}`;
    }

    const { name: mvuviName } = await getName();
    // Insert data into the database
    const { error } = await supabase.from("fish_listings").insert([
      {
        fish_name: formData.fishName,
        description: formData.description,
        price: parseFloat(formData.price),
        quantity: parseInt(formData.quantity),
        location: formData.location,
        image_url: imageUrl,
        mvuvi_id: loggedInUser?.id,
        mvuvi_name: mvuviName,
        status: "Available",
      },
    ]);

    if (error) {
      console.error("Error inserting fish data:", error.message);
      // setMessage("Fish listing failed");
      // setUploading(false);
      return;
    } else {
      console.log("Fish data inserted successfully");
      setFormData({
        fishName: "",
        description: "",
        price: "",
        quantity: "",
        // location: "",
        category: "",
        image: null,
      });
      refetch();
    }

    console.log("Fish data submitted");
    // setUploading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg my-10">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-800">
        <FaFish className="text-blue-500" /> Add New Fish
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Fish Name */}
        <div>
          <label className="block font-semibold mb-1">Fish Name</label>
          <input
            type="text"
            name="fishName"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g., Tilapia"
            required
            onChange={handleChange}
            value={formData.fishName}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            rows="3"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Short description of the fish..."
            onChange={handleChange}
            value={formData.description}
          />
        </div>

        {/* Price and Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Price (Ksh/kg)</label>
            <input
              type="number"
              name="price"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              onChange={handleChange}
              value={formData.price}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Quantity (kg)</label>
            <input
              type="number"
              name="quantity"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              onChange={handleChange}
              value={formData.quantity}
            />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-2">Fish Image</label>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-xl py-6 cursor-pointer hover:bg-blue-50 transition">
            <FaCamera className="text-3xl text-blue-400 mb-2" />
            <span className="text-gray-500">Click to upload image</span>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
              required
            />
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-4 w-32 h-32 object-cover rounded-lg shadow"
              />
            )}
          </label>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaMapMarkerAlt className="text-blue-500" />
          {loadingLocation ? (
            <span>Getting location...</span>
          ) : (
            <span className="text-sm italic">
              Location: {formData.location}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Add Fish
        </button>
      </form>
    </div>
  );
};

export default AddFishForm;
