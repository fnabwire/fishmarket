import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { supabase } from '../supabaseClient';

// Create context
const FishListContext = createContext();

// Provider
export const FishListProvider = ({ children }) => {
  const [fishList, setFishList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const fetchFish = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('fish_listings')
      .select('*')
      .eq('status', 'Available')
      .order('created_at', { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setFishList(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchFish();
  }, []);

  //get single fisherman data by id
//     try {
//     getFisherManName = async (fishermanId)=> {
//     const { data: profile } = await supabase
//           .from("profiles")
//           .select("*")
//           .eq("id", fishermanId)
//           .single();
//     return profile.name;
//   }
    
//   } catch (error) {
//     console.error("Error fetching fisherman name:", error);
//     return "Unknown Fisherman";
//   }

  // Apply filtering
  const filteredFish = useMemo(() => {
    return fishList.filter((fish) => {
      const matchesLocation = selectedLocation
        ? fish.location?.toLowerCase() === selectedLocation.toLowerCase()
        : true;

      const matchesSearch = searchTerm
        ? fish.fish_name?.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      return matchesLocation && matchesSearch;
    });
  }, [fishList, selectedLocation, searchTerm]);

  return (
    <FishListContext.Provider
      value={{
        fishList: filteredFish,
        allFish: fishList, // unfiltered (in case needed)
        loading,
        error,
        refetch: fetchFish,
        searchTerm,
        setSearchTerm,
        selectedLocation,
        setSelectedLocation,
        // getFisherManName
      }}
    >
      {children}
    </FishListContext.Provider>
  );
};


// Custom hook
export const useFishList = () => {
  const context = useContext(FishListContext);
  if (!context) {
    throw new Error('useFishList must be used within a FishListProvider');
  }
  return context;
};
