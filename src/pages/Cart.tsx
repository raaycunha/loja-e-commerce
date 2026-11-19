import {
  ArrowRight,
  ChevronRight,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Trash2,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { useCartContext } from "../context/Cart/useCartContext";

const Cart = () => {
  const navigate = useNavigate();
  const {
    productsToBuy,
    handleFinishBuy,
    handleRemoveProduct,
    handleChangeQuantity,
  } = useCartContext();

  const [cupom, setCupom] = useState("");
  const [cupomApplied, setCupomApplied] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const handleCupom = () => {
    if (cupom.trim().toUpperCase() !== "PRIMEIRACOMPRA") {
      setError(true);
      return;
    }
    setCupomApplied(true);
    setCupom("");
  };

  const parsePrice = (price: string) =>
    Number(price.replace(/\./g, "").replace(",", "."));

  const subTotal = productsToBuy.reduce((ac, item) => {
    return ac + parsePrice(item.lastPrice) * item.quantity;
  }, 0);

  const priceTotal = productsToBuy.reduce((ac, item) => {
    return ac + parsePrice(item.price) * item.quantity;
  }, 0);

  const discount = productsToBuy.reduce((ac, item) => {
    const originalPrice = parsePrice(item.lastPrice);
    const currentPrice = parsePrice(item.price);
    return ac + (originalPrice - currentPrice) * item.quantity;
  }, 0);

  const cupomDiscount = cupomApplied ? Math.min(5, priceTotal) : 0;

  const discountValue = discount + cupomDiscount;

  const finalPrice =
    priceTotal > 190
      ? priceTotal - cupomDiscount
      : priceTotal - cupomDiscount + 30;
  return (
    <Container>
      <main className="py-7 md:py-12">
        {/* BREADCRUMB */}
        <nav className="mb-8 flex items-center gap-2 font-poppins text-xs text-gray-500">
          <Link to="/" className="transition-colors hover:text-[#202020]">
            Início
          </Link>

          <ChevronRight size={13} />

          <span className="font-medium text-[#202020]">Meu carrinho</span>
        </nav>

        {/* HEADER */}
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl text-[#202020] md:text-4xl">
              Meu Carrinho
            </h1>

            <p className="mt-2 font-poppins text-sm text-gray-500">
              Revise seus produtos antes de finalizar a compra.
            </p>
          </div>

          <span className="font-poppins text-xs text-gray-500">
            {productsToBuy.length}{" "}
            {productsToBuy.length > 1 || productsToBuy.length === 0
              ? "produtos"
              : "produto"}{" "}
            no carrinho
          </span>
        </div>

        {/* CONTEÚDO */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
          {/* LISTA DE PRODUTOS */}
          <section className="min-w-0">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
              {/* CABEÇALHO DA LISTA */}
              <div className="hidden grid-cols-[1fr_100px_100px] gap-4 border-b border-gray-200 px-6 py-4 font-poppins text-xs font-medium text-gray-500 sm:grid">
                <span>Produto</span>
                <span className="text-center">Quantidade</span>
                <span className="text-right">Valor</span>
              </div>

              {/* PRODUTOS */}
              {productsToBuy.map((item, index) => (
                <article
                  key={item.cartId}
                  className={`p-4 sm:p-6 ${
                    index !== productsToBuy.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-[minmax(0,1fr)_100px_100px] sm:items-center sm:gap-4">
                    {/* IMAGEM + INFORMAÇÕES */}
                    <div className="flex min-w-0 gap-4">
                      <div className="h-32 w-24 shrink-0 overflow-hidden rounded-md bg-[#F5F3F0] sm:h-36 sm:w-28">
                        <img
                          onClick={() => navigate(`/produto/${item.slug}`)}
                          src={`/images/products/${item.img}`}
                          alt={item.name}
                          className="h-full w-full object-cover cursor-pointer transition-all duration-400 hover:translate-y-1 hover:scale-[1.05] hover:opacity-90"
                        />
                      </div>

                      <div className="flex min-w-0 flex-col">
                        <span className="font-poppins text-[11px] uppercase tracking-wider text-gray-400">
                          {item.category}
                        </span>

                        <h2
                          onClick={() => navigate(`/produto/${item.slug}`)}
                          className="mt-1 font-serif text-base leading-snug text-[#202020] cursor-pointer sm:text-lg"
                        >
                          {item.name}
                        </h2>

                        <div className="mt-3 flex flex-col gap-1 font-poppins text-xs text-gray-500">
                          <span>Tamanho: {item.tam}</span>
                          {/* <span>Cor: {item.color}</span> */}
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="font-poppins text-sm font-semibold text-[#202020]">
                            R$ {item.price}
                          </span>

                          <span className="font-poppins text-xs text-gray-400 line-through">
                            R$ {item.lastPrice}
                          </span>
                        </div>

                        <button
                          onClick={() => handleRemoveProduct(item.cartId)}
                          type="button"
                          className="mt-3 flex w-fit items-start gap-1.5 font-poppins text-xs text-gray-500 cursor-pointer transition-colors hover:text-red-600"
                        >
                          <Trash2 size={13} strokeWidth={1.5} />
                          Remover
                        </button>
                      </div>
                    </div>

                    {/* QUANTIDADE — VISUAL */}
                    <div className="flex items-center justify-between sm:justify-center">
                      <span className="font-poppins text-xs text-gray-500 sm:hidden">
                        Quantidade
                      </span>

                      <div className="flex h-9 w-24 items-center justify-between rounded-md border border-gray-300">
                        <button
                          onClick={() =>
                            handleChangeQuantity(item.cartId, "down")
                          }
                          type="button"
                          disabled={item.quantity === 1}
                          aria-label="Diminuir quantidade"
                          className="flex h-full w-7 items-center justify-center text-gray-600 cursor-pointer hover:text-gray-800"
                        >
                          <Minus size={13} />
                        </button>

                        <span className="font-poppins text-xs font-medium">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            handleChangeQuantity(item.cartId, "up")
                          }
                          type="button"
                          disabled={item.quantity === 5}
                          aria-label="Aumentar quantidade"
                          className="flex h-full w-7 items-center justify-center text-gray-600 cursor-pointer hover:text-gray-800"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>

                    {/* SUBTOTAL DO PRODUTO */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-3 sm:justify-end sm:border-0 sm:pt-0">
                      <span className="font-poppins text-xs text-gray-500 sm:hidden">
                        Valor
                      </span>

                      <span className="font-poppins text-sm font-semibold text-[#202020]">
                        R$ {(parsePrice(item.price) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* CONTINUAR COMPRANDO */}
            <Link
              to="/"
              className="mt-5 inline-flex items-center gap-2 font-poppins text-sm font-medium text-[#202020] transition-opacity hover:opacity-60"
            >
              <ArrowRight size={16} className="rotate-180" />
              Continuar comprando
            </Link>

            {/* BENEFÍCIOS */}
            <div className="mt-10 grid grid-cols-1 gap-5 border-t border-gray-200 pt-8 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Truck size={25} strokeWidth={1.4} />

                <div>
                  <h3 className="font-poppins! text-xs font-semibold">
                    Frete grátis
                  </h3>
                  <p className="mt-1 font-poppins text-xs leading-relaxed text-gray-500">
                    Acima de R$ 190
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <RotateCcw size={25} strokeWidth={1.4} />

                <div>
                  <h3 className="font-poppins! text-xs font-semibold">
                    Devolução fácil
                  </h3>
                  <p className="mt-1 font-poppins text-xs leading-relaxed text-gray-500">
                    Em até 30 dias
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck size={25} strokeWidth={1.4} />

                <div>
                  <h3 className="font-poppins! text-xs font-semibold">
                    Compra segura
                  </h3>
                  <p className="mt-1 font-poppins text-xs leading-relaxed text-gray-500">
                    Segurança em primeiro lugar
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* RESUMO DO PEDIDO */}
          <aside className="rounded-lg border border-gray-200 bg-white lg:sticky lg:top-24">
            <div className="border-b border-gray-200 px-6 py-5">
              <h2 className="text-3xl text-[#202020]">Resumo do Pedido</h2>

              <p className="mt-1 font-poppins text-xs text-gray-500">
                Confira os valores da sua compra.
              </p>
            </div>

            <div className="flex flex-col gap-5 p-6">
              {/* VALORES */}
              <div className="flex items-center justify-between font-poppins text-sm">
                <span className="text-gray-500">
                  Subtotal ({productsToBuy.length}{" "}
                  {productsToBuy.length > 1 || productsToBuy.length === 0
                    ? "produtos"
                    : "produto"}
                  )
                </span>
                <span className="font-medium">
                  {subTotal.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>

              <div className="flex items-center justify-between font-poppins text-sm">
                <span className="text-gray-500">Descontos</span>
                <span className="font-medium text-[#8B5541]">
                  {discountValue.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>

              <div className="flex items-center justify-between font-poppins text-sm">
                <span className="text-gray-500">Frete</span>
                <span className="font-medium">
                  {productsToBuy.length < 1
                    ? "--"
                    : finalPrice > 190
                      ? "Grátis"
                      : finalPrice <= 0
                        ? "R$ 0,00"
                        : "R$ 30,00"}
                </span>
              </div>

              <div className="border-t border-gray-200 pt-5">
                <div className="flex items-center justify-between">
                  <span className="font-poppins text-sm font-semibold">
                    Total
                  </span>

                  <span className="font-poppins text-xl font-semibold text-[#202020]">
                    {productsToBuy.length < 1
                      ? "R$ 0,00"
                      : finalPrice.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                  </span>
                </div>
              </div>

              {/* CUPOM */}
              <div className="border-t border-gray-200 pt-5">
                <label
                  htmlFor="cupom"
                  className="mb-3 flex items-center gap-2 font-poppins text-xs font-semibold"
                >
                  <Tag size={15} strokeWidth={1.5} />
                  Cupom de desconto
                </label>

                <div className="flex gap-2">
                  <input
                    id="cupom"
                    type="text"
                    placeholder="PRIMEIRACOMPRA"
                    value={cupom}
                    onFocus={() => setError(false)}
                    onChange={(e) => setCupom(e.target.value)}
                    className={`h-11 min-w-0 flex-1 rounded-md border border-gray-300 px-3 font-poppins text-xs outline-none focus:border-black ${error ? "border-red-500 text-red-500" : ""}`}
                  />

                  <button
                    onClick={handleCupom}
                    disabled={productsToBuy.length <= 0 ? true : false}
                    type="button"
                    className={`rounded-md border border-[#202020] px-4 font-poppins text-xs font-medium transition-colors ${productsToBuy.length <= 0 ? "cursor-not-allowed opacity-35" : "cursor-pointer hover:bg-[#202020] hover:text-white"}`}
                  >
                    Aplicar
                  </button>
                </div>
              </div>

              {/* FINALIZAR */}
              <button
                onClick={handleFinishBuy}
                disabled={productsToBuy.length <= 0 ? true : false}
                type="button"
                className={`flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#202020] font-poppins text-sm font-medium text-white transition-opacity ${productsToBuy.length <= 0 ? "opacity-65 cursor-not-allowed" : "cursor-pointer hover:opacity-85"}`}
              >
                <ShoppingBag size={17} strokeWidth={1.7} />
                Finalizar compra
                <ArrowRight size={16} />
              </button>

              <p className="text-center font-poppins text-[11px] leading-relaxed text-gray-400">
                Ambiente seguro para finalizar seu pedido.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </Container>
  );
};

export default Cart;
