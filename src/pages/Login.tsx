import {
  ArrowRight,
  Eye,
  EyeClosed,
  LockKeyhole,
  Mail,
  ShoppingBag,
} from "lucide-react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const {
    email,
    password,
    remember,
    changeEmail,
    changePassword,
    changeRemember,
    handleLogin,
  } = useLogin();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="min-h-screen -mt-10 -mb-16">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* FORMULÁRIO */}
        <section className="flex items-center justify-center px-6 py-14 w-full max-w-300 mx-auto sm:px-12 lg:px-16">
          <div className="w-full max-w-md">
            {/* LOGO */}
            <div className="flex flex-col items-center gap-2 mb-12 text-center">
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
              <p className="mt-1 font-poppins text-[10px] uppercase tracking-[0.35em] text-gray-400">
                Sua essência, seu estilo
              </p>
            </div>
            {/* TÍTULO */}
            <div className="mb-9">
              <span className="font-poppins text-xs uppercase tracking-[0.2em] text-[#9A806B]">
                Minha conta
              </span>

              <h1 className="mt-3 text-3xl text-[#202020] sm:text-4xl">
                Bem-vindo de volta
              </h1>

              <p className="mt-3 font-poppins text-sm leading-relaxed text-gray-500">
                Entre na sua conta e continue descobrindo peças que combinam com
                você.
              </p>
            </div>

            {/* CAMPOS */}
            <form className="flex flex-col gap-5">
              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-poppins text-xs font-medium text-[#202020]"
                >
                  E-mail
                </label>

                <div className="flex h-12 items-center gap-3 rounded-md border border-gray-300 px-4 transition-colors focus-within:border-[#202020]">
                  <Mail
                    size={18}
                    strokeWidth={1.5}
                    className="shrink-0 text-gray-400"
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    title="Digite seu e-mail"
                    className="h-full w-full bg-transparent font-poppins text-sm text-[#202020] outline-none placeholder:text-gray-400"
                    value={email}
                    onChange={(e) => changeEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* SENHA */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="font-poppins text-xs font-medium text-[#202020]"
                  >
                    Senha
                  </label>

                  <span className="font-poppins text-xs text-gray-500">
                    Esqueceu sua senha?
                  </span>
                </div>

                <div className="flex h-12 items-center gap-3 rounded-md border border-gray-300 px-4 transition-colors focus-within:border-[#202020]">
                  <LockKeyhole
                    size={18}
                    strokeWidth={1.5}
                    className="shrink-0 text-gray-400"
                  />

                  <input
                    id="password"
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="Digite sua senha"
                    title="Digite sua senha"
                    className="h-full w-full bg-transparent font-poppins text-sm text-[#202020] outline-none placeholder:text-gray-400"
                    value={password}
                    onChange={(e) => changePassword(e.target.value)}
                  />

                  {showPassword ? (
                    <Eye
                      onClick={() => setShowPassword(false)}
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-gray-400 cursor-pointer transition-colors duration-400 hover:text-gray-700"
                    />
                  ) : (
                    <EyeClosed
                      onClick={() => setShowPassword(true)}
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-gray-400 cursor-pointer transition-colors duration-400 hover:text-gray-700"
                    />
                  )}
                </div>
              </div>

              {/* LEMBRAR */}
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => changeRemember(e.target.checked)}
                  className="h-4 w-4 accent-[#202020]"
                />

                <span className="font-poppins text-xs text-gray-600">
                  Lembrar de mim
                </span>
              </label>

              {/* BOTÃO LOGIN — SOMENTE VISUAL */}
              <button
                onClick={handleLogin}
                type="button"
                className={`mt-3 flex h-12 w-full items-center justify-center gap-3 rounded-md bg-[#202020] font-poppins text-sm font-medium text-white transition-opacity ${email.trim() === "" || password.trim() === "" ? "cursor-not-allowed opacity-65" : "hover:opacity-85"}`}
              >
                Entrar na minha conta
                <ArrowRight size={17} />
              </button>
            </form>

            {/* DIVISOR */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="font-poppins text-xs text-gray-400">ou</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* CADASTRO — SOMENTE VISUAL */}
            <div className="text-center">
              <p className="font-poppins text-sm text-gray-500">
                Ainda não tem uma conta?
              </p>

              <span className="mt-2 inline-block font-poppins text-sm font-semibold text-[#202020] underline underline-offset-4">
                Criar minha conta
              </span>
            </div>

            {/* RODAPÉ */}
            <div className="mt-12 flex justify-center gap-2 border-t border-gray-100 pt-6">
              <ShoppingBag
                size={15}
                strokeWidth={1.5}
                className="text-gray-400"
              />

              <span className="font-poppins text-xs text-gray-400">
                Uma experiência exclusiva AVELA
              </span>
            </div>
          </div>
        </section>

        {/* IMAGEM DESKTOP */}
        <section className="relative hidden min-h-screen overflow-hidden bg-[#EDE5DA] lg:block">
          <img
            src="/images/categories/banners/banner-feminino-m.jpg"
            alt="Coleção AVELA"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* OVERLAY SUAVE */}
          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

          {/* TEXTO SOBRE A IMAGEM */}
          <div className="absolute top-16 left-12 right-12 text-black xl:bottom-20 xl:left-16">
            <span className="font-poppins text-xs uppercase tracking-[0.3em] text-black">
              AVELA COLLECTION
            </span>

            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight xl:text-5xl">
              Elegância em cada detalhe.
            </h2>

            <p className="mt-4 max-w-md font-poppins text-sm leading-relaxed text-black">
              Descubra uma nova forma de expressar sua essência através da moda.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
