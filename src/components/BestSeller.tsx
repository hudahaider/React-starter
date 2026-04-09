import { Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { useWishlist } from "@/hooks/useWishlist";
import { toast } from "sonner";

type Product = {
  id: string;
  img: string;
  title: string;
  price: string;
};

const products: Product[] = [
  {
    id: "1",
    img: "/assets/lipstick.jpg",
    title: "Lipstick",
    price: "$19.99 USD",
  },
  {
    id: "2",
    img: "/assets/pallete.jpg",
    title: "Palette",
    price: "$19.99 USD",
  },
  { id: "3", img: "/assets/gloss.jpg", title: "Gloss", price: "$19.99 USD" },
  {
    id: "4",
    img: "/assets/eyeliner.jpg",
    title: "Eye Liner",
    price: "$19.99 USD",
  },
  {
    id: "5",
    img: "/assets/brushe-4.jpg",
    title: "Makeup Brushes",
    price: "$19.99",
  },
  {
    id: "6",
    img: "/assets/Scrunchie-1.jpg",
    title: "Scrunchie",
    price: "$19.99",
  },
];

const BestSeller = () => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const toggleWishlist = (product: Product) => {
    const isFavourite = wishlist.some((fav) => fav.id === product.id);

    if (isFavourite) {
      removeFromWishlist(product);
      toast.success("Removed from wishlist");
    } else {
      addToWishlist(product);
      toast.success("Added to wishlist");
    }
  };

  return (
    <section className="bg-pink-200 py-20 px-10 lg:px-15 text-center">
      {/* Title */}
      <h1 className="font-serif text-4xl text-slate-800 mb-15 uppercase tracking-widest">
        Best Sellers
      </h1>

      {/* Products */}
      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full relative"
        >
          <CarouselContent>
            {products.map((p) => (
              <CarouselItem
                key={p.id}
                className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/4 p-3"
              >
                {/* Card */}
                <div className="bg-pink-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl h-72">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover hover:scale-110 transition duration-500"
                    />

                    <span className="absolute bottom-3 left-3 bg-black text-white text-xs rounded-full px-3 py-1">
                      Sold Out
                    </span>

                    {/* Wishlist */}
                    <div
                      className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md"
                      onClick={() => toggleWishlist(p)}
                    >
                      {wishlist.some((item) => item.id === p.id) ? (
                        <Heart className="w-5 h-5 fill-red-500 stroke-red-500" />
                      ) : (
                        <Heart className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h2 className="text-md text-gray-600 italic text-center mt-4">
                    {p.title}
                  </h2>

                  <p className="text-lg font-semibold text-pink-900 text-center mt-1">
                    {p.price}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute -left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute -right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
};

export default BestSeller;
