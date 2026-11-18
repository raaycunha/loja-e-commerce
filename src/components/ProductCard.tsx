import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import type { ProductItem } from "../types/product";
import ProductRating from "./ProductRating";

interface ProductCardProps {
  products: ProductItem[];
}

const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 md:grid-cols-3">
        {products.map((item: ProductItem) => (
          <Link key={`${item.slug}-${item.id}`} to={`/produto/${item.slug}`}>
            <div
              className="
                flex h-full flex-col overflow-hidden
                rounded-lg border border-gray-200 bg-white
              "
            >
              <img
                src={`/images/products/${item.img}`}
                alt={item.name}
                className="w-full object-cover"
              />

              <div className="flex flex-1 flex-col gap-1 p-2">
                <h3 className="text-xs font-bold sm:text-base">{item.name}</h3>

                <span className="text-[0.65rem] text-gray-500 sm:text-xs">
                  {item.category}
                </span>

                {/* AVALIAÇÕES */}
                <div className="my-1">
                  <ProductRating ratings={item.ratings} compact />
                </div>

                {/* PREÇOS */}
                <div className="mt-auto flex items-end justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1">
                    <span className="text-xs font-semibold sm:text-sm">
                      R$ {item.price}
                    </span>

                    <span className="text-[0.6rem] text-gray-400 line-through">
                      R$ {item.lastPrice}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="
                      flex h-7 w-7 shrink-0 items-center
                      justify-center rounded-md border
                      border-gray-300 transition-colors
                      hover:bg-black hover:text-white
                    "
                    aria-label="Ver produto"
                  >
                    <BsCart3 className="cursor-pointer text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
