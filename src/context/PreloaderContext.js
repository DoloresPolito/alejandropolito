"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { PRELOADER_STORAGE_KEY } from "./preloaderConstants";

function readShown() {
  try {
    return sessionStorage.getItem(PRELOADER_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

const PreloaderContext = createContext();

export const PreloaderProvider = ({ children }) => {
  const [hasShownPreloader, setShown] = useState(false);

  // Al cargar, recupera si ya se mostró en esta visita
  useEffect(() => {
    if (readShown()) setShown(true);
  }, []);

  const setHasShownPreloader = useCallback((value) => {
    setShown(value);
    if (value) {
      try {
        sessionStorage.setItem(PRELOADER_STORAGE_KEY, "1");
      } catch {}
    }
  }, []);

  return (
    <PreloaderContext.Provider value={{ hasShownPreloader, setHasShownPreloader }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => useContext(PreloaderContext);
