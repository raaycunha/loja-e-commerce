import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CartItem } from "../types/cart";
import type { ProductItem } from "../types/product";
import type { SizeType } from "../utils/AllProducts";
import { storage } from "../utils/storage";

export type UpDownType = "up" | "down";

export const useCart = () => {
  const [productsToBuy, setProductsToBuy] = useState<CartItem[]>(
    () => storage.get<CartItem[]>("cart") ?? [],
  );

  const navigate = useNavigate();

  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  // Quantidade total de unidades no carrinho
  const cartQuantity = productsToBuy.length;

  // Adicionar produto
  const addProductCart = (
    product: ProductItem,
    quantity: number,
    selectedSize: SizeType,
  ) => {
    if (!Number.isInteger(quantity) || quantity < 1) return;

    const availableSizes = Array.isArray(product.tamAvailable)
      ? product.tamAvailable
      : [product.tamAvailable];

    if (!availableSizes.includes(selectedSize)) return;

    setProductsToBuy((prev) => {
      const existingItem = prev.find(
        (item) => item.slug === product.slug && item.tam === selectedSize,
      );

      if (existingItem) {
        return prev.map((item) =>
          item.cartId === existingItem.cartId
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      const newItem: CartItem = {
        ...product,
        cartId: crypto.randomUUID(),
        tam: selectedSize,
        quantity,
      };

      return [...prev, newItem];
    });
  };

  // Remover produto
  const handleRemoveProduct = (cartId: string) => {
    setProductsToBuy((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  // Alterar quantidade
  const handleChangeQuantity = (cartId: string, upOrDown: UpDownType) => {
    setProductsToBuy((prev) =>
      prev.map((item) => {
        if (item.cartId !== cartId) return item;
        if (upOrDown === "down" && item.quantity === 1) return item;

        return {
          ...item,
          quantity:
            upOrDown === "up"
              ? item.quantity + 1
              : Math.max(1, item.quantity - 1),
        };
      }),
    );
  };

  // Finalizar compra (simulação)
  const handleFinishBuy = () => {
    if (productsToBuy.length === 0) return;

    const userLogin = storage.get("user-login");
    if (userLogin !== true) {
      setShowPopUp(true);
      return;
    }

    setProductsToBuy([]);
    navigate("/");
  };

  useEffect(() => {
    storage.set("cart", productsToBuy);
  }, [productsToBuy]);

  return {
    cartQuantity,
    productsToBuy,
    addProductCart,
    handleRemoveProduct,
    handleChangeQuantity,
    handleFinishBuy,
    showPopUp,
    changeShowPopUp: setShowPopUp,
  };
};
