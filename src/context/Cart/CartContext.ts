import { createContext } from "react";
import type { UpDownType } from "../../hooks/useCart";
import type { CartItem } from "../../types/cart";
import type { ProductItem } from "../../types/product";
import type { SizeType } from "../../utils/AllProducts";

interface ContextType {
  cartQuantity: number;

  productsToBuy: CartItem[];

  addProductCart: (
    product: ProductItem,
    quantity: number,
    selectedSize: SizeType,
  ) => void;

  handleFinishBuy: () => void;

  handleRemoveProduct: (cartId: string) => void;

  handleChangeQuantity: (cartId: string, upOrDown: UpDownType) => void;

  showPopUp: boolean;

  changeShowPopUp: (value: boolean) => void;
}

export const CartContext = createContext<ContextType | null>(null);
