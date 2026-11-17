import { useRef } from "react";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useNavigate } from "react-router-dom";
import "swiper/css";

export type CategoryType =
  | "Feminino"
  | "Masculino"
  | "Novidades"
  | "Ofertas"
  | "Acessórios"
  | "Essenciais";

interface CategoriesItem {
  id: number;
  title: CategoryType;
  img: string;
}

const categories: CategoriesItem[] = [
  {
    id: 0,
    title: "Feminino",
    img: "card-feminino",
  },
  {
    id: 1,
    title: "Masculino",
    img: "card-masculino",
  },
  {
    id: 2,
    title: "Novidades",
    img: "card-novidades",
  },
  {
    id: 3,
    title: "Essenciais",
    img: "card-essenciais",
  },
  {
    id: 4,
    title: "Acessórios",
    img: "card-acessorios",
  },
  {
    id: 5,
    title: "Ofertas",
    img: "card-ofertas",
  },
];

const Category = () => {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType | null>(null);
  const handleCategory = (category: CategoryType) => {
    if (category === "Acessórios") navigate("acessorios");
    else navigate(category.toLowerCase());
  };
  return (
    <section className="w-full pt-12">
      <h2
        className="
          mb-5
          text-2xl
          font-semibold

          md:text-3xl
          lg:text-4xl
        "
      >
        Compre por Categoria
      </h2>

      <Swiper
        className="w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor
        speed={500}
        breakpoints={{
          0: {
            slidesPerView: 2.15,
            spaceBetween: 8,
          },

          640: {
            slidesPerView: 3.15,
            spaceBetween: 12,
          },

          1024: {
            slidesPerView: 4.15,
            spaceBetween: 16,
          },
        }}
      >
        {categories.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => handleCategory(item.title)}
              className="
                overflow-hidden
                rounded-lg
                border
                border-gray-200
                bg-white
              "
            >
              <img
                src={`/images/categories/${item.img}.webp`}
                alt={`Categoria: ${item.title}`}
                className="
                  aspect-4/3
                  w-full
                  object-cover
                  object-top
                "
              />

              <div className="py-2 text-center">
                <span className="text-xs sm:text-base">{item.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="mt-3 text-center text-xs text-gray-400 lg:hidden">
        Deslize para conhecer mais categorias →
      </p>
    </section>
  );
};

export default Category;
