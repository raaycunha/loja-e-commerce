import { useRef } from "react";
import { BsCart3 } from "react-icons/bs";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import "swiper/css";

import ProductRating from "../components/ProductRating";
import { productList } from "../utils/AllProducts";

const featuredProducts = Object.values(productList)
  .flat()
  .sort(() => Math.random() - 0.5)
  .slice(0, 8);

const Products = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="produtos" className="flex flex-col gap-4 pt-12">
      <div className="flex items-end justify-between">
        <h2
          className="
            text-xl
            font-semibold
            md:text-2xl
            lg:text-4xl
          "
        >
          Destaques da Semana
        </h2>

        <Link
          to="/novidades"
          className="
            hidden
            text-sm
            text-gray-500
            transition-colors
            hover:text-black
            lg:block
          "
        >
          Ver todos os produtos →
        </Link>
      </div>

      <Swiper
        className="w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor
        speed={600}
        breakpoints={{
          0: {
            slidesPerView: 1.15,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2.3,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3.15,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4.15,
            spaceBetween: 20,
          },
        }}
      >
        {/* PRODUTOS EM DESTAQUE */}
        {featuredProducts.map((item) => (
          <SwiperSlide key={item.slug} className="h-auto!">
            <Link to={`/produto/${item.slug}`} className="block h-full">
              <div
                className="
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                "
              >
                {/* IMAGEM */}
                <img
                  src={`/images/products/${item.img}`}
                  alt={item.name}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                <div className="flex flex-1 flex-col gap-1 p-2">
                  {/* NOME */}
                  <h3 className="text-base font-bold sm:text-lg">
                    {item.name}
                  </h3>

                  {/* CATEGORIA */}
                  <span className="text-[0.65rem] text-gray-500 sm:text-xs">
                    {item.category}
                  </span>

                  {/* AVALIAÇÕES */}
                  <div className="my-1">
                    <ProductRating ratings={item.ratings} compact />
                  </div>

                  {/* PREÇO E ÍCONE */}
                  <div className="mt-auto flex items-end justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1">
                      <span className="text-xs font-semibold sm:text-sm">
                        R$ {item.price}
                      </span>

                      <span className="text-[0.6rem] text-gray-400 line-through">
                        R$ {item.lastPrice}
                      </span>
                    </div>

                    {/* ÍCONE PARA ABRIR O PRODUTO */}
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-gray-300
                        transition-colors
                        hover:bg-black
                        hover:text-white
                      "
                    >
                      <BsCart3 className="text-sm" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="text-center text-xs text-gray-400 lg:hidden">
        Deslize para conhecer mais produtos →
      </p>
    </section>
  );
};

export default Products;
