import { Heart } from "lucide-react";
import React, { useState } from "react";
type Product = {
  id: string;
  img: string;
  title: string;
  price: string;
};

const products: Product[] = [
  {
    id: "1",
    img: "public/assets/lipstick.jpg",
    title: "Lipstick",
    price: "$19.99 USD",
  },
  {
    id: "2",
    img: "public/assets/pallete.jpg",
    title: "Palette",
    price: "$19.99 USD",
  },
  {
    id: "3",
    img: "public/assets/gloss.jpg",
    title: "Gloss",
    price: "$19.99 USD",
  },
  {
    id: "4",
    img: "public/assets/eyeliner.jpg",
    title: "Eye Liner",
    price: "$19.99 USD",
  },
];

const BestSeller = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const handleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="bg-pink-200 py-16 px-4 text-center">
      {/* Heading */}
      <h1 className="font-serif text-4xl text-slate-800 mb-15 uppercase tracking-widest">
        Best Sellers
      </h1>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.id} className="text-left group">
            {/* Image Container + span */}
            <div className="relative bg-white overflow-hidden mb-4 h-75 flex justify-center items-center">
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-3 left-5 bg-black text-white text-xs rounded-full px-3 py-1">
                Sold Out
              </span>
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => handleWishlist(p.id)}
              >
                {wishlist.includes(p.id) ? (
                  <Heart className="fill-black" />
                ) : (
                  <Heart />
                )}
              </div>
            </div>

            {/* Content */}
            <h2 className="text-md font-medium text-slate-600 mb-1 italic">
              {p.title}
            </h2>
            <p className="text-lg font-semibold text-slate-700">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default BestSeller;
