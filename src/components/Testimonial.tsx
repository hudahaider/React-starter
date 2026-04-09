import { cn } from "@/lib/utils";
import { Marquee } from "../components/ui/marquee";
import { reviews } from "@/types/review";

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
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
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Testimonial = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-pink-200 md:shadow-xl py-20">
      {/* Title */}
      <h1 className="font-serif text-4xl text-slate-800 mb-15 uppercase tracking-widest">
        Customer Feedback
      </h1>
      {/* First Row */}
      <Marquee pauseOnHover className="duration-20">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Second Row */}
      <Marquee reverse pauseOnHover className="duration-20">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Edge Gradient Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 md:w-1/3 bg-linear-to-r from-white "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 md:w-1/3 bg-linear-to-l from-white "></div>
    </div>
  );
};
export default Testimonial;
