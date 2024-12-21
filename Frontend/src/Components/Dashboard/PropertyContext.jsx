// PropertyContext.js
import React, { createContext, useState } from "react";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [selectedHouse, setSelectedHouse] = useState(null);

  return (
    <PropertyContext.Provider value={{ selectedHouse, setSelectedHouse }}>
      {children}
    </PropertyContext.Provider>
  );
};
