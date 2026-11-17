import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import useFilter, {
  type OrderType,
  type ProductCategory,
} from "../hooks/useFilter";
import Container from "./Container";
import ProductCard from "./ProductCard";

type TitleType =
  | "Feminino"
  | "Masculino"
  | "Novidades"
  | "Ofertas"
  | "Essenciais"
  | "Acessórios";

interface CategoryLayoutProps {
  imgMobile: string;
  imgDesktop: string;
  title: TitleType;
  body: string;
  category?: ProductCategory;
}

const CategoryLayout = ({
  imgMobile,
  imgDesktop,
  title,
  body,
  category,
}: CategoryLayoutProps) => {
  const {
    order,
    changeOrder,
    productFiltered,
    selectedSizes,
    toggleSize,
    firstPrice,
    changeFirstPrice,
    secondPrice,
    changeSecondPrice,
    handleResetFilter,
  } = useFilter(category);
  const location = useLocation();
  const currentPage = location.pathname.split("/").filter(Boolean).pop();

  const classColors =
    "h-6 w-6 rounded-full cursor-pointer transition-all duration-400 hover:scale-[1.05] hover:opacity-75";
  return (
    <div className="flex flex-col gap-8">
      <Container>
        {/* HERO */}
        <section
          style={
            {
              "--img-mobile": `url(${imgMobile})`,
              "--img-desktop": `url(${imgDesktop})`,
            } as React.CSSProperties
          }
          className={`
          relative
          min-h-120
          w-full
          overflow-hidden
          rounded-xl
          bg-(image:--img-mobile)
          bg-cover
          bg-center
          bg-no-repeat
          shadow-[0_4px_20px_rgba(0,0,0,0.08)]

          min-[500px]:bg-(image:--img-desktop)
          min-[500px]:min-h-90
        `}
        >
          {/* Conteúdo Hero */}
          <div
            className="
            absolute
            inset-0
            flex
            flex-col
            px-5
            py-5

            sm:px-8
            sm:py-7

            md:px-12
            md:py-8

            lg:px-16
          "
          >
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="
              flex
              items-center
              gap-1.5
              font-poppins
              text-sm
              text-gray-600
            "
            >
              <Link
                to="/"
                className="
                transition-colors
                duration-300
                hover:text-black
              "
              >
                Início
              </Link>

              <ChevronRight className="h-3 w-3" />

              <span className="capitalize font-medium text-[#202020]">
                {currentPage}
              </span>
            </nav>

            {/* Título */}
            <div
              className="
              mt-10
              flex
              max-w-md
              flex-col
              items-start
              text-left

              md:mt-auto
              md:mb-auto
            "
            >
              <h1
                className="
                text-3xl
                font-semibold
                uppercase
                leading-none
                text-[#202020]

                sm:text-4xl
                md:text-6xl
              "
              >
                {title}
              </h1>

              <p
                className="
                mt-2
                max-w-sm
                font-poppins
                text-xs
                leading-relaxed
                text-[#2d2d2d]

                sm:text-sm
                md:text-lg
              "
              >
                {body}
              </p>
            </div>
          </div>
        </section>

        {/* MOBILE - Botão filtro */}
        <button
          type="button"
          className="
          flex
          h-11
          w-full
          items-center
          justify-center
          gap-2
          rounded-md
          border
          border-gray-300
          bg-white
          font-poppins
          text-sm
          font-medium
          mt-8

          md:hidden
        "
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filtrar e ordenar
        </button>

        {/* FILTROS + PRODUTOS */}
        <section
          className="
          grid
          grid-cols-1
          gap-6
          mt-12

          md:grid-cols-[200px_minmax(0,1fr)]

          lg:grid-cols-[230px_minmax(0,1fr)]
        "
        >
          {/* SIDEBAR FILTROS */}
          <aside
            className="
            hidden
            h-max
            overflow-hidden
            rounded-lg
            border
            border-gray-300
            bg-white

            md:block
          "
          >
            {/* Título */}
            <div className="border-b border-gray-300 px-4 py-3">
              <h2 className="font-poppins! text-base font-semibold">
                Filtrar por
              </h2>
            </div>

            {/* Tamanho */}
            <div className="border-b border-gray-300 px-4 py-4">
              <h3 className="font-poppins! text-sm font-semibold">Tamanho</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {(["P", "M", "G"] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => toggleSize(size)}
                    aria-pressed={selectedSizes.includes(size)}
                    className={`
                    flex
                    h-8
                    min-w-8
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-gray-300
                    px-2
                    font-poppins
                    text-xs
                    cursor-pointer
                    transition-colors
                    duration-300
                    hover:border-black
                    hover:bg-black
                    hover:text-white
                    ${
                      selectedSizes.includes(size)
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-black"
                    }
                  `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Cor */}
            <div className="border-b border-gray-300 px-4 py-4">
              <h3 className="font-poppins! text-sm font-semibold">Cor</h3>

              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Branco"
                  className={`${classColors} border bg-white`}
                />

                <button
                  type="button"
                  aria-label="Bege"
                  className={`${classColors} bg-[#D7C2A8]`}
                />

                <button
                  type="button"
                  aria-label="Marrom"
                  className={`${classColors} bg-[#795548]`}
                />
              </div>
            </div>

            {/* Preço */}
            <div className="border-b border-gray-300 px-4 py-4">
              <h3 className="font-poppins! text-sm font-semibold">
                Faixa de preço
              </h3>

              <div className="mt-3 flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Mín."
                  value={firstPrice}
                  onChange={(e) => changeFirstPrice(e.target.value)}
                  className="
                  min-w-0
                  w-full
                  rounded-md
                  border
                  border-gray-300
                  px-2
                  py-2
                  font-poppins
                  text-xs
                  outline-none
                  focus:border-black
                "
                />

                <span>-</span>

                <input
                  type="number"
                  placeholder="Máx."
                  value={secondPrice}
                  onChange={(e) => changeSecondPrice(e.target.value)}
                  className="
                  min-w-0
                  w-full
                  rounded-md
                  border
                  border-gray-300
                  px-2
                  py-2
                  font-poppins
                  text-xs
                  outline-none
                  focus:border-black
                "
                />
              </div>
            </div>

            {/* Ordenação */}
            <div className="border-b border-gray-300 px-4 py-4">
              <label
                htmlFor="order"
                className="font-poppins! text-sm font-semibold"
              >
                Ordenar por
              </label>

              <select
                id="order"
                value={order}
                onChange={(e) => changeOrder(e.target.value as OrderType)}
                className="mt-3 w-full rounded-md border border-gray-300 bg-white px-2 py-2 text-xs"
              >
                <option value="all">Mais relevantes</option>
                <option value="priceUp">Menor preço</option>
                <option value="priceDown">Maior preço</option>
              </select>
            </div>

            {/* Limpar */}
            <div className="p-4">
              <button
                onClick={handleResetFilter}
                type="button"
                className="
                rounded-md
                bg-[#202020]
                px-4
                py-2
                font-poppins
                text-xs
                font-medium
                text-white
                cursor-pointer
                transition-opacity
                duration-300
                hover:opacity-80
              "
              >
                Limpar filtros
              </button>
            </div>
          </aside>

          {/* PRODUTOS */}
          <div className="min-w-0">
            <ProductCard products={productFiltered ?? []} />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default CategoryLayout;
