import {
  ChevronRight,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Container from "../components/Container";
import { useCartContext } from "../context/Cart/useCartContext";
import { productList, type SizeType } from "../utils/AllProducts";

const ProductDetails = () => {
  const { addProductCart } = useCartContext();

  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<SizeType | null>(null);
  const loading = quantity >= 1 && selectedSize !== null;

  const products = Object.values(productList).flat();
  const product = products.find((item) => item.slug === slug);

  const handleProductBuy = () => {
    if (selectedSize === null) return;
    addProductCart(product, quantity, selectedSize);
    navigate("/");
  };

  if (!product) {
    return (
      <Container>
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-serif text-3xl">Produto não encontrado</h1>
          <p className="font-poppins text-sm text-gray-500">
            Não encontramos o produto que você procura.
          </p>
          <Link
            to="/"
            className="rounded-md bg-[#202020] px-6 py-3 font-poppins text-sm text-white transition-opacity hover:opacity-80"
          >
            Voltar para a loja
          </Link>
        </div>
      </Container>
    );
  }

  const sizes: SizeType[] = ["P", "M", "G"];

  const parsePrice = (price: string) =>
    Number(price.replace(/\./g, "").replace(",", "."));

  const currentPrice = parsePrice(product.price);
  const originalPrice = parsePrice(product.lastPrice);

  const discount =
    originalPrice > currentPrice
      ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
      : 0;

  return (
    <Container>
      <main className="py-6 md:py-10">
        {/* BREADCRUMB */}
        <nav className="mb-8 flex items-center gap-2 font-poppins text-xs text-gray-500">
          <Link to="/" className="hover:text-black">
            Início
          </Link>
          <ChevronRight size={13} />

          <span>{product.category}</span>
          <ChevronRight size={13} />

          <span className="truncate font-medium text-[#202020]">
            {product.name}
          </span>
        </nav>

        {/* ÁREA PRINCIPAL */}
        <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-14">
          {/* IMAGEM DO PRODUTO */}
          <div className="relative overflow-hidden rounded-lg border border-gray-100 bg-[#F5F3F0]">
            {discount > 0 && (
              <span className="absolute left-4 top-4 z-10 rounded-sm bg-[#202020] px-3 py-1.5 font-poppins text-xs font-medium text-white">
                -{discount}%
              </span>
            )}

            <img
              src={`/images/products/${product.img}`}
              alt={product.name}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* INFORMAÇÕES DO PRODUTO */}
          <div className="flex flex-col">
            <span className="mb-2 font-poppins text-xs uppercase tracking-[0.18em] text-gray-500">
              {product.category}
            </span>

            <h1 className="font-bold font-serif text-3xl leading-tight text-[#202020] md:text-4xl">
              {product.name}
            </h1>

            {/* AVALIAÇÃO */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-[#E8B400]">
                {Array.from({
                  length: product.starQuantity,
                }).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    fill="currentColor"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span className="font-poppins text-xs text-gray-500">
                {product.starQuantity} de 5 estrelas
              </span>
            </div>

            {/* PREÇO */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="font-poppins text-2xl font-semibold text-[#202020] md:text-3xl">
                R$ {product.price}
              </span>

              {discount > 0 && (
                <>
                  <span className="font-poppins text-sm text-gray-400 line-through">
                    R$ {product.lastPrice}
                  </span>

                  <span className="rounded bg-[#F5EDE6] px-2 py-1 font-poppins text-xs font-medium text-[#8B5541]">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="mt-2 font-poppins text-xs text-gray-500">
              ou até 3x de R$ {(currentPrice / 3).toFixed(2).replace(".", ",")}{" "}
              sem juros
            </p>

            <div className="my-7 border-t border-gray-200" />

            {/* SELEÇÃO DE TAMANHO */}
            <div>
              <h3 className="font-poppins! text-sm font-semibold mb-2">
                Tamanho
              </h3>

              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      if (!product.tamAvailable.includes(size)) return;
                      setSelectedSize(size);
                    }}
                    aria-pressed={selectedSize === size}
                    className={`flex h-11 w-12 items-center justify-center rounded-md border font-poppins! text-sm transition-colors 
                      ${
                        selectedSize === size
                          ? "border-[#202020] bg-[#202020] text-white"
                          : "border-gray-300 bg-white hover:border-[#202020]"
                      }
                      ${
                        product.tamAvailable.includes(size)
                          ? "cursor-pointer"
                          : "opacity-30 cursor-not-allowed hover:border-gray-300"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTIDADE */}
            <div className="mt-7">
              <h3 className="mb-3 font-poppins! text-sm font-semibold">
                Quantidade
              </h3>

              <div className="flex h-11 w-32 items-center justify-between rounded-md border border-gray-300">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  disabled={quantity === 1}
                  aria-label="Diminuir quantidade"
                  className="flex h-full w-10 items-center justify-center cursor-pointer disabled:opacity-40"
                >
                  <Minus size={14} />
                </button>

                <span className="font-poppins text-sm font-medium">
                  {quantity}
                </span>

                <button
                  type="button"
                  aria-label="Aumentar quantidade"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="flex h-full w-10 items-center justify-center cursor-pointer"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* BOTÃO DE COMPRA */}
            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={handleProductBuy}
                type="button"
                title={
                  loading
                    ? "Finalizar compra"
                    : "Aguardando você finalizar as escolhas"
                }
                className={`flex h-12 w-full items-center justify-center gap-3 cursor-not-allowed rounded-md bg-[#202020] font-poppins text-sm font-medium text-white opacity-60 ${loading && "cursor-pointer opacity-100"}`}
              >
                <ShoppingBag size={18} />
                Adicionar ao carrinho
              </button>

              <p className="text-center font-poppins text-xs text-gray-500">
                Selecione as opções para continuar sua compra.
              </p>
            </div>

            {/* BENEFÍCIOS */}
            <div className="mt-8 grid gap-4 border-t border-gray-200 pt-6">
              <div className="flex items-center gap-3">
                <Truck size={20} strokeWidth={1.5} className="text-gray-600" />
                <div>
                  <p className="font-poppins text-xs font-medium">
                    Frete grátis acima de R$ 190
                  </p>
                  <p className="font-poppins text-xs text-gray-500">
                    Consulte as condições de entrega.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <RotateCcw
                  size={20}
                  strokeWidth={1.5}
                  className="text-gray-600"
                />
                <div>
                  <p className="font-poppins text-xs font-medium">
                    Devolução fácil em 30 dias
                  </p>
                  <p className="font-poppins text-xs text-gray-500">
                    Consulte a política de devoluções.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={20}
                  strokeWidth={1.5}
                  className="text-gray-600"
                />
                <div>
                  <p className="font-poppins text-xs font-medium">
                    Compra segura
                  </p>
                  <p className="font-poppins text-xs text-gray-500">
                    Informações protegidas durante a compra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DETALHES ADICIONAIS */}
        <section className="mt-16 border-t border-gray-200 pt-9 md:mt-20">
          <h2 className="font-serif text-2xl text-[#202020]">
            Detalhes do produto
          </h2>

          <p className="mt-4 max-w-3xl font-poppins text-sm leading-7 text-gray-600">
            Conheça {product.name}, uma peça da nossa seleção
            {` ${product.category.toLowerCase()}`}. Explore os detalhes e
            encontre seu próximo favorito.
          </p>

          <div className="mt-7 grid gap-3 border-t border-gray-100 pt-5 font-poppins text-sm sm:max-w-xl">
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Produto</span>
              <span className="text-right">{product.name}</span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Categoria</span>
              <span>{product.category}</span>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default ProductDetails;
