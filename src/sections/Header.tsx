import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BsTag, BsTruck } from "react-icons/bs";
import { FiRotateCcw } from "react-icons/fi";
import { PiHandbag, PiUser } from "react-icons/pi";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useCartContext } from "../context/Cart/useCartContext";

const Header = () => {
  const { cartQuantity } = useCartContext();

  const [menuBar, setMenuBar] = useState(false);

  const closeMenu = () => {
    setMenuBar(false);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        bg-white/95
        backdrop-blur-md
        shadow-[0_2px_10px_rgba(0,0,0,0.05)]
        mb-10
      "
    >
      {/* Topo Desktop */}
      <div className="hidden bg-[#202020] lg:block">
        <Container>
          <div
            className="
              flex
              items-center
              justify-between
              py-2
              text-xs
              text-[#fafafa]
              xl:text-sm
            "
          >
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <BsTruck className="text-base" /> Frete grátis acima de R$190
              </span>

              <div className="h-4 w-px bg-gray-500" />

              <span className="flex items-center gap-2">
                <FiRotateCcw className="text-base" /> Devolução fácil em 30 dias
              </span>
            </div>

            <span className="flex items-center gap-2">
              <BsTag className="text-base" /> 10% OFF na primeira compra
            </span>
          </div>
        </Container>
      </div>

      {/* Header Principal */}
      <div className="relative py-3 lg:py-5">
        <Container>
          <div className="flex items-center justify-between">
            {/* Menu Mobile */}
            <button
              type="button"
              onClick={() => setMenuBar((prev) => !prev)}
              aria-label={menuBar ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuBar}
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-md
                transition-colors
                duration-300
                hover:bg-gray-100
                lg:hidden
              "
            >
              <Menu
                className={`
                  absolute
                  h-6
                  w-6
                  transition-all
                  duration-300
                  ${
                    menuBar
                      ? "rotate-90 scale-75 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }
                `}
              />

              <X
                className={`
                  absolute
                  h-6
                  w-6
                  transition-all
                  duration-300
                  ${
                    menuBar
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-75 opacity-0"
                  }
                `}
              />
            </button>

            {/* Logo */}
            <a href="/" onClick={closeMenu} className="shrink-0">
              <img
                className="
                  w-24
                  object-contain
                  sm:w-28
                  lg:w-40
                "
                src="/images/logo-avela.webp"
                alt="Logo AVELA"
              />
            </a>

            {/* Navegação Desktop */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-6 font-poppins text-sm">
                <li>
                  <Link
                    to="masculino"
                    className="transition-colors duration-300 hover:text-[#8A6A52]"
                  >
                    Masculino
                  </Link>
                </li>

                <li>
                  <Link
                    to="feminino"
                    className="transition-colors duration-300 hover:text-[#8A6A52]"
                  >
                    Feminino
                  </Link>
                </li>

                <li>
                  <Link
                    to="novidades"
                    className="transition-colors duration-300 hover:text-[#8A6A52]"
                  >
                    Novidades
                  </Link>
                </li>

                <li>
                  <Link
                    to="essenciais"
                    className="transition-colors duration-300 hover:text-[#8A6A52]"
                  >
                    Essenciais
                  </Link>
                </li>

                <li>
                  <Link
                    to="acessorios"
                    className="transition-colors duration-300 hover:text-[#8A6A52]"
                  >
                    Acessórios
                  </Link>
                </li>

                <li>
                  <Link
                    to="ofertas"
                    className="
                      font-medium
                      text-[#9A4A3A]
                      transition-opacity
                      duration-300
                      hover:opacity-70
                    "
                  >
                    Ofertas
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Funções */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/login"
                type="button"
                aria-label="Minha conta"
                title="Minha conta"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  transition-colors
                  duration-300
                  hover:bg-gray-100
                "
              >
                <PiUser className="text-xl lg:text-2xl" />
              </Link>

              <Link
                to="carrinho"
                type="button"
                aria-label="Carrinho"
                title="Carrinho"
                className="
                  relative
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  transition-colors
                  duration-300
                  hover:bg-gray-100
                "
              >
                <PiHandbag className="text-xl lg:text-2xl" />

                <span
                  className="
                    absolute
                    -right-0.5
                    -top-0.5
                    flex
                    h-4
                    min-w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-[#202020]
                    px-1
                    text-[0.6rem]
                    text-white
                  "
                >
                  {cartQuantity}
                </span>
              </Link>
            </div>
          </div>

          {/* Menu Mobile Aberto */}
          <div
            className={`
              absolute
              left-0
              top-full
              w-full
              overflow-hidden
              border-t
              border-gray-100
              bg-white
              shadow-[0_12px_30px_rgba(0,0,0,0.08)]
              transition-all
              duration-300
              ease-out
              lg:hidden
              ${
                menuBar
                  ? "visible max-h-125 translate-y-0 opacity-100"
                  : "invisible max-h-0 -translate-y-2 opacity-0"
              }
            `}
          >
            <Container>
              <nav className="py-4">
                <ul className="flex flex-col font-poppins">
                  <li>
                    <Link
                      to="/masculino"
                      onClick={closeMenu}
                      className="
                        block
                        border-b
                        border-gray-100
                        py-3
                        text-sm
                        font-medium
                        transition-colors
                        duration-300
                        hover:text-[#8A6A52]
                      "
                    >
                      Masculino
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/feminino"
                      onClick={closeMenu}
                      className="
                        block
                        border-b
                        border-gray-100
                        py-3
                        text-sm
                        font-medium
                        transition-colors
                        duration-300
                        hover:text-[#8A6A52]
                      "
                    >
                      Feminino
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/novidades"
                      onClick={closeMenu}
                      className="
                        block
                        border-b
                        border-gray-100
                        py-3
                        text-sm
                        font-medium
                        transition-colors
                        duration-300
                        hover:text-[#8A6A52]
                      "
                    >
                      Novidades
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/essenciais"
                      onClick={closeMenu}
                      className="
                        block
                        border-b
                        border-gray-100
                        py-3
                        text-sm
                        font-medium
                        transition-colors
                        duration-300
                        hover:text-[#8A6A52]
                      "
                    >
                      Essencial
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/acessorios"
                      onClick={closeMenu}
                      className="
                        block
                        border-b
                        border-gray-100
                        py-3
                        text-sm
                        font-medium
                        transition-colors
                        duration-300
                        hover:text-[#8A6A52]
                      "
                    >
                      Acessórios
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/ofertas"
                      onClick={closeMenu}
                      className="
                        block
                        border-b
                        border-gray-100
                        py-3
                        text-sm
                        font-medium
                        transition-colors
                        duration-300
                        hover:text-[#8A6A52]
                      "
                    >
                      Ofertas
                    </Link>
                  </li>
                </ul>

                <div
                  className="
                    mt-4
                    rounded-lg
                    bg-[#F7F3EE]
                    p-4
                    font-poppins
                  "
                >
                  <span className="text-xs text-gray-500">
                    Benefício exclusivo
                  </span>

                  <p className="mt-1 text-sm font-medium text-[#202020]">
                    10% OFF na sua primeira compra.
                  </p>
                </div>
              </nav>
            </Container>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
