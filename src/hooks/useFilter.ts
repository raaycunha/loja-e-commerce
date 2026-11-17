import { useMemo, useState } from "react";
import { productList, type SizeType } from "../utils/AllProducts";

export type ProductCategory = keyof typeof productList;
export type OrderType = "all" | "priceUp" | "priceDown";

const parsePrice = (price: string) =>
  Number(price.replace(/\./g, "").replace(",", "."));

const useFilter = (category?: ProductCategory) => {
  const [order, setOrder] = useState<OrderType>("all");

  const [selectedSizes, setSelectedSizes] = useState<SizeType[]>([]);

  const [firstPrice, setFirstPrice] = useState<string>("");
  const [secondPrice, setSecondPrice] = useState<string>("");

  const productFiltered = useMemo(() => {
    let products = category ? productList[category] : [];

    if (selectedSizes.length > 0) {
      products = products.filter((product) => {
        if (product.tamAvailable === "U") return true;
        return selectedSizes.some((size) =>
          product.tamAvailable.includes(size),
        );
      });
    }

    if (order !== "all") {
      products = [...products].sort((a, b) => {
        const priceA = parsePrice(a.price);
        const priceB = parsePrice(b.price);

        return order === "priceUp" ? priceA - priceB : priceB - priceA;
      });
    }

    if (firstPrice !== "" && secondPrice !== "") {
      return [...products].filter((product) => {
        const priceA = parsePrice(product.price);
        const firstPriceNumber = parsePrice(firstPrice);
        const secondPriceNumber = parsePrice(secondPrice);
        return priceA >= firstPriceNumber && priceA <= secondPriceNumber;
      });
    }

    return products;
  }, [category, order, selectedSizes, firstPrice, secondPrice]);

  const toggleSize = (size: SizeType) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size],
    );
  };

  const handleResetFilter = () => {
    setFirstPrice("");
    setSecondPrice("");
    setSelectedSizes([]);
    setOrder("all");
  };

  return {
    order,
    changeOrder: setOrder,
    productFiltered,
    selectedSizes,
    toggleSize,
    firstPrice,
    changeFirstPrice: setFirstPrice,
    secondPrice,
    changeSecondPrice: setSecondPrice,
    handleResetFilter,
  };
};

export default useFilter;
