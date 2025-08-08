"use client";
import { createContext, useContext, useState } from "react";

const PreloaderContext = createContext();

export const PreloaderProvider = ({ children }) => {
  const [hasShownPreloader, setHasShownPreloader] = useState(false);
  return (
    <PreloaderContext.Provider value={{ hasShownPreloader, setHasShownPreloader }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => useContext(PreloaderContext);