import { Star, StarHalf } from "lucide-react";

export const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1 mt-2">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={"full" + i}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      )}

      {/* Empty Stars */}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={"empty" + i} className="w-4 h-4 text-gray-300" />
      ))}
    </div>
  );
};
