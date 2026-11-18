import type { SizeType } from "../utils/AllProducts";

export type RatingDistribution = [number, number, number, number, number];

export interface ProductItem {
  id: number;
  img: string;
  slug: string;
  name: string;
  category: string;
  starQuantity: number;
  ratings: RatingDistribution;
  lastPrice: string;
  price: string;
  tamAvailable: SizeType | SizeType[];
}

export interface ProductList {
  female: ProductItem[];
  male: ProductItem[];
  accessories: ProductItem[];
  news: ProductItem[];
  essential: ProductItem[];
  offers: ProductItem[];
}
