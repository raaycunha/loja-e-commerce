import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useState } from "react";
import {
  FaCcMastercard,
  FaCcVisa,
  FaFacebookF,
  FaInstagram,
  FaPix,
  FaWhatsapp,
} from "react-icons/fa6";

const footerLinks = {
  shop: [
    { label: "Feminino", path: "/feminino" },
    { label: "Masculino", path: "/masculino" },
    { label: "Novidades", path: "/novidades" },
    { label: "Essenciais", path: "/essenciais" },
    { label: "Acessórios", path: "/acessorios" },
    { label: "Ofertas", path: "/ofertas" },
  ],

  institutional: [
    { label: "Sobre a AVELA" },
    { label: "Nossa história" },
    { label: "Política de privacidade" },
    { label: "Termos de uso" },
  ],

  help: [
    { label: "Central de ajuda" },
    { label: "Trocas e devoluções" },
    { label: "Entregas e frete" },
    { label: "Meus pedidos" },
  ],
};

const linkStyle =
  "w-fit font-poppins text-xs text-gray-500 transition-colors duration-300 hover:text-[#202020] sm:text-sm";

const socialStyle =
  "flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#202020] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#202020] hover:bg-[#202020] hover:text-white";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <footer className="mt-16 w-full bg-white">
      {/* NEWSLETTER */}
      <section className="bg-[#F5F1EB]">
        <div className="mx-auto grid w-full max-w-300 grid-cols-1 items-center gap-8 px-5 py-12 md:grid-cols-2 md:gap-12 md:py-16">
          <div className="flex flex-col gap-3">
            <span className="font-poppins text-[10px] font-medium uppercase tracking-[0.25em] text-[#927E6C]">
              Universo AVELA
            </span>

            <h2 className="max-w-md font-serif text-3xl leading-tight text-[#202020] md:text-4xl">
              Seu estilo merece
              <br />
              novas descobertas.
            </h2>

            <p className="max-w-md font-poppins text-xs leading-6 text-gray-600 sm:text-sm">
              Receba novidades, inspirações e seleções especiais da AVELA
              diretamente no seu e-mail.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex h-13 items-center border-b border-[#B9ADA1]">
              <Mail
                size={18}
                strokeWidth={1.5}
                className="mr-3 shrink-0 text-[#796D62]"
              />

              <input
                type="email"
                placeholder="Seu melhor e-mail"
                aria-label="Seu e-mail para newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-full min-w-0 flex-1 bg-transparent font-poppins text-sm text-[#202020] outline-none placeholder:text-[#8F847A]"
              />

              <button
                onClick={() => {
                  if (email.trim() === "") return;
                  setEmail("");
                }}
                type="button"
                aria-label="Cadastrar e-mail"
                className="flex h-10 w-10 items-center justify-center text-[#202020] cursor-pointer transition-opacity duration-400 hover:opacity-50"
              >
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </div>

            <p className="font-poppins text-[11px] leading-5 text-[#8F847A]">
              Ao se cadastrar, você concorda em receber comunicações da AVELA.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER PRINCIPAL */}
      <div className="mx-auto w-full max-w-300 px-5">
        {/* MARCA */}
        <div className="flex flex-col gap-5 border-b border-gray-200 py-10 md:flex-row md:items-end md:justify-between md:py-12">
          <div className="flex flex-col items-start gap-4">
            <Link to="/" aria-label="AVELA - Página inicial">
              <img
                src="/images/logo-avela.webp"
                alt="AVELA"
                className="w-32 object-contain sm:w-36"
              />
            </Link>

            <p className="max-w-md font-poppins text-xs leading-6 text-gray-500 sm:text-sm">
              Mais que roupas, escolhemos fazer parte da sua história. Peças que
              valorizam sua essência, sua liberdade e sua forma de se expressar.
            </p>
          </div>

          {/* REDES SOCIAIS */}
          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={socialStyle}
            >
              <FaInstagram size={17} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={socialStyle}
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={socialStyle}
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-4 md:gap-8 md:py-14">
          {/* EXPLORE */}
          <div className="flex flex-col gap-5">
            <h3 className="font-poppins! text-sm font-semibold text-[#202020]">
              Explore
            </h3>

            <nav aria-label="Coleções" className="flex flex-col gap-3">
              {footerLinks.shop.map((item) => (
                <a key={item.label} href="#" className={linkStyle}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* INSTITUCIONAL */}
          <div className="flex flex-col gap-5">
            <h3 className="font-poppins! text-sm font-semibold text-[#202020]">
              Institucional
            </h3>

            <nav aria-label="Institucional" className="flex flex-col gap-3">
              {footerLinks.institutional.map((item) => (
                <a key={item.label} href="#" className={linkStyle}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* AJUDA */}
          <div className="flex flex-col gap-5">
            <h3 className="font-poppins! text-sm font-semibold text-[#202020]">
              Precisa de ajuda?
            </h3>

            <nav aria-label="Ajuda" className="flex flex-col gap-3">
              {footerLinks.help.map((item) => (
                <a key={item.label} href="#" className={linkStyle}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* ATENDIMENTO */}
          <div className="flex flex-col gap-5">
            <h3 className="font-poppins! text-sm font-semibold text-[#202020]">
              Atendimento
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2.5">
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-gray-500"
                />

                <span className="font-poppins text-xs leading-5 text-gray-500">
                  Entre em contato com nossa equipe.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock3
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-gray-500"
                />

                <span className="font-poppins text-xs leading-5 text-gray-500">
                  Confira nossos canais e horários.
                </span>
              </div>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex w-fit items-center gap-1.5 font-poppins text-xs font-medium text-[#202020] cursor-pointer hover:opacity-60"
              >
                Fale com a AVELA
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* BENEFÍCIOS E PAGAMENTOS */}
        <div className="flex flex-col gap-8 border-t border-gray-200 py-9 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="flex items-center gap-3">
              <Truck
                size={23}
                strokeWidth={1.4}
                className="shrink-0 text-[#202020]"
              />

              <div>
                <p className="font-poppins text-xs font-semibold">
                  Frete grátis
                </p>
                <p className="mt-1 font-poppins text-[11px] text-gray-500">
                  Acima de R$ 190
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <RotateCcw
                size={23}
                strokeWidth={1.4}
                className="shrink-0 text-[#202020]"
              />

              <div>
                <p className="font-poppins text-xs font-semibold">
                  Trocas facilitadas
                </p>
                <p className="mt-1 font-poppins text-[11px] text-gray-500">
                  Consulte as condições
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck
                size={23}
                strokeWidth={1.4}
                className="shrink-0 text-[#202020]"
              />

              <div>
                <p className="font-poppins text-xs font-semibold">
                  Compra segura
                </p>
                <p className="mt-1 font-poppins text-[11px] text-gray-500">
                  Sua segurança importa
                </p>
              </div>
            </div>
          </div>

          {/* PAGAMENTO */}
          <div className="flex flex-col gap-3 lg:items-end">
            <span className="font-poppins text-xs font-medium text-[#202020]">
              Formas de pagamento
            </span>

            <div className="flex items-center gap-3 text-[#202020]">
              <FaCcVisa size={30} />
              <FaCcMastercard size={30} />
              <FaPix size={22} />
            </div>
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div className="border-t border-gray-200 bg-[#FAF9F7]">
        <div className="mx-auto flex w-full max-w-300 flex-col items-center justify-between gap-3 px-5 py-5 md:flex-row">
          <p className="font-poppins text-[11px] text-gray-500">
            © 2026 AVELA. Todos os direitos reservados.
          </p>

          <p className="font-poppins text-[11px] text-gray-500">
            Feito com atenção aos detalhes.
          </p>

          <p className="font-poppins text-[11px] text-gray-500">
            Desenvolvido por{" "}
            <span className="font-medium text-[#202020]">Ray</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
