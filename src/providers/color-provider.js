"use client";

import { createContext, useState, useEffect } from "react";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [red, setRed] = useState(false);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setRed((prev) => !prev);
    }, 15000);
    return () => clearInterval(colorInterval);
  }, []);

  return (
    <ColorContext.Provider value={{ red }}>{children}</ColorContext.Provider>
  );
};
