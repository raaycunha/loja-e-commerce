import { ArrowRight, Eye, EyeClosed, LockKeyhole, Mail, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useCartContext } from "../context/Cart/useCartContext";
import { useLogin } from "../hooks/useLogin";

const LoginPopUp = () => {
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
  const { changeShowPopUp } = useCartContext();

  const closePopUp = useCallback(() => {
    changeShowPopUp(false);
  }, [changeShowPopUp]);

  const handleSubmitLogin = () => {
    const success = handleLogin();

    if (success) {
      closePopUp();
    }
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopUp();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [changeShowPopUp, closePopUp]);
  return createPortal(
    <div
      className="
      fixed inset-0 z-9999
      flex items-center justify-center
      bg-black/60
      px-4 py-5
      backdrop-blur-[2px]
      sm:px-6
    "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopUp();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label="Entrar na minha conta"
        className="
        relative
        w-full max-w-xl
        max-h-[90dvh]
        overflow-y-auto
        rounded-lg
        bg-white
        px-6 py-10
        shadow-2xl
        sm:px-12
        sm:py-12
      "
      >
        {/* BOTÃO FECHAR */}
        <button
          type="button"
          onClick={closePopUp}
          aria-label="Fechar login"
          className="
          absolute right-0 top-0
          flex h-9 w-9
          cursor-pointer
          items-center justify-center
          rounded-full
          text-gray-500
          z-999
          transition-colors
          hover:bg-gray-100
          hover:text-[#202020]
        "
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <div className="mx-auto w-full max-w-md">
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
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmitLogin();
            }}
          >
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
              type="submit"
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
        </div>
      </section>
    </div>,
    document.body,
  );
};

export default LoginPopUp;
