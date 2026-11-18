import { Star } from "lucide-react";
import type { RatingDistribution } from "../types/product";

interface ProductRatingProps {
  ratings: RatingDistribution;
  compact?: boolean;
}

const ProductRating = ({ ratings, compact = false }: ProductRatingProps) => {
  const total = ratings.reduce((sum, count) => sum + count, 0);

  if (total === 0) {
    return (
      <span className="font-poppins text-xs text-gray-400">Sem avaliações</span>
    );
  }

  const average =
    ratings.reduce((sum, count, index) => sum + count * (index + 1), 0) / total;

  const formattedAverage = average.toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const formattedTotal =
    total >= 1000
      ? `${(total / 1000).toLocaleString("pt-BR", {
          maximumFractionDigits: 1,
        })} mil`
      : total.toLocaleString("pt-BR");

  return (
    <div
      className={`flex flex-wrap items-center ${compact ? "gap-1.5" : "gap-2"}`}
      aria-label={`Nota média ${formattedAverage} de 5, baseada em ${total} avaliações`}
    >
      <span
        className={`font-poppins font-semibold text-[#202020] ${
          compact ? "text-xs" : "text-sm"
        }`}
      >
        {formattedAverage}
      </span>

      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => {
          const fill = Math.max(0, Math.min(100, (average - index) * 100));

          const size = compact ? 12 : 16;

          return (
            <span
              key={index}
              className="relative inline-block shrink-0"
              style={{ width: size, height: size }}
            >
              <Star
                size={size}
                strokeWidth={1}
                fill="currentColor"
                className="absolute inset-0 text-gray-200"
              />

              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill}%` }}
              >
                <Star
                  size={size}
                  strokeWidth={1}
                  fill="currentColor"
                  className="block text-[#E8B400]"
                />
              </span>
            </span>
          );
        })}
      </div>

      <span
        className={`font-poppins text-gray-500 ${
          compact ? "text-[0.65rem]" : "text-xs"
        }`}
      >
        ({formattedTotal})
      </span>
    </div>
  );
};

export default ProductRating;
