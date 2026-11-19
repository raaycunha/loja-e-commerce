import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { classButton } from "../utils/classbutton";

const Banners = () => {
  return (
    <section className="hidden pt-12 md:block">
      <div className="flex flex-col gap-4">
        {/* Banner Novidades */}
        <article
          className="
            group
            relative
            aspect-16/5
            overflow-hidden
            rounded-xl
          "
        >
          <img
            src="/images/banners/banner-novidades.webp"
            alt="Nova coleção AVELA"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* Conteúdo */}
          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              justify-center
              items-start
              px-24
              lg:px-36
            "
          >
            <h3
              className="
                text-3xl
                font-semibold
                text-[#202020]
                lg:text-4xl
              "
            >
              NOVA COLEÇÃO
            </h3>

            <p
              className="
                mt-1
                max-w-sm
                text-sm
                text-[#202020]
                lg:text-base
              "
            >
              Peças atuais, leves e fáceis de combinar.
            </p>

            <Link
              to="novidades"
              className={`
                ${classButton}
                h-10!
                mt-4
                inline-flex
                bg-[#202020]
                text-xs
                text-white

                hover:-translate-y-0.5
                hover:bg-black

                lg:text-base
              `}
            >
              Ver Novidades <BsArrowRight />
            </Link>
          </div>
        </article>

        {/* Banner Ofertas */}
        <article
          className="
            group
            relative
            aspect-16/5
            overflow-hidden
            rounded-xl
          "
        >
          <img
            src="/images/banners/banner-ofertas.webp"
            alt="Ofertas especiais AVELA"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* Conteúdo */}
          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              justify-center
              items-start
              px-24
              lg:px-36
            "
          >
            <h3
              className="
                text-3xl
                font-semibold
                text-[#202020]
                lg:text-4xl
              "
            >
              OFERTAS ESPECIAIS
            </h3>

            <p
              className="
                mt-1
                max-w-base
                text-sm
                text-[#202020]
                lg:text-base
              "
            >
              Aproveite condições especiais por tempo limitado.
            </p>

            <Link
              to="ofertas"
              className={`
                ${classButton}
                h-10!
                mt-4
                inline-flex
                bg-[#202020]
                py-2
                text-xs
                text-white

                hover:-translate-y-0.5
                hover:bg-black

                lg:text-base
              `}
            >
              Ver Ofertas <BsArrowRight />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Banners;
