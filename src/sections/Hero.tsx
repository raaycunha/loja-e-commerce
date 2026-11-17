import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { classButton } from "../utils/classbutton";

const Hero = () => {
  return (
    <section
      className="
        relative
        flex
        min-h-200
        w-full
        overflow-hidden
        rounded-lg

        bg-[url('/images/img-hero-mobile.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
        shadow-[0px_0px_20px_rgba(0,0,0,0.10)]

        min-[500px]:min-h-115
        min-[500px]:items-center
        min-[500px]:bg-[url('/images/img-hero-desktop.jpg')]
        min-[500px]:bg-cover
        min-[500px]:bg-top

        lg:min-h-130
      "
    >
      <div
        className="
          flex
          w-full
          flex-col
          items-center
          px-2
          pt-8
          text-center

          sm:px-6

          min-[500px]:max-w-[50%]
          min-[500px]:items-start
          min-[500px]:px-10
          min-[500px]:pt-0
          min-[500px]:text-left

          lg:max-w-[75%]
          lg:px-24
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            uppercase
            leading-[0.95]

            sm:text-4xl
            lg:text-5xl
          "
        >
          Vista sua essência, <br /> todos os dias.
        </h1>

        <p
          className="
            mt-3
            max-w-md
            text-sm
            leading-relaxed
            text-[#2d2d2d]

            sm:text-base

            md:max-w-sm
          "
        >
          Peças que acompanham sua rotina e revelam sua personalidade.
        </p>

        <div
          className="
            mt-5
            flex
            flex-wrap
            items-center
            justify-center
            gap-3

            md:justify-start
          "
        >
          <a
            href="#produtos"
            className={`
              ${classButton}
              inline-flex
              text-white
              bg-[#202020]
              hover:-translate-y-0.5
              hover:bg-black
              hover:shadow-md

              sm:text-xl
  `}
          >
            Ver Coleção
            <BsArrowRight />
          </a>

          <Link
            to="novidades"
            className={`
              ${classButton}
              hidden
              border
              border-[#202020]
              text-[#202020]

              hover:bg-[#202020]
              hover:text-white

              lg:inline-flex
            `}
          >
            Novidades
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
