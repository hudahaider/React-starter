import { cn } from "@/lib/utils";
import { Marquee } from "../components/ui/marquee";
import { reviews } from "@/types/review";
import { StarRating } from "./start-rating";

const ReviewCard = ({
  img,
  name,
  comment,
  rating,
}: {
  img: string;
  name: string;
  comment: string;
  rating?: number;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
        "dark:border-gray-50/10 dark:bg-gray-50/1 dark:hover:bg-gray-50/5",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{comment}</blockquote>
      <blockquote className="mt-2 text-sm">
        <StarRating rating={Number(rating)} />
      </blockquote>
    </figure>
  );
};

const Testimonial = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-pink-200 dark:bg-slate-800 md:shadow-xl py-20">
      {/* Title */}
      <h1 className="font-serif text-4xl text-slate-800 mb-15 uppercase tracking-widest">
        Customer Feedback
      </h1>
      {/* First Row */}
      <Marquee pauseOnHover className="duration-20 ">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      {/* Second Row */}
      <Marquee reverse pauseOnHover className="duration-20">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      {/* Edge Gradient Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 md:w-1/3 bg-linear-to-r from-white dark:from-gray-900 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 md:w-1/3 bg-linear-to-l from-white dark:from-gray-900 "></div>
    </div>
  );
};
export default Testimonial;
