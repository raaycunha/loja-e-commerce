import type { SizeType } from "../utils/AllProducts";
import type { ProductItem } from "./product";

export interface CartItem extends ProductItem {
  cartId: string;
  tam: SizeType;
  quantity: number;
}
