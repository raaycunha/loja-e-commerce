import { useContext } from "react";
import { CartContext } from "./CartContext";

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Context fora do Provider");
  }

  return context;
};
