import { Breadcrumb, BreadcrumbItem } from "../components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { ChevronRight, Heart } from "lucide-react";
import { toast } from "sonner";
import { Products } from "@/types/product";
import { useWishlist } from "@/hooks/useWishlist"; // Use your hook

// Added Product type definition
type Product = {
  id: string;
  img: string;
  title: string;
  price: string;
  category: string;
};

const BlendBuffs = () => {
  // 1. Use the hook for unified wishlist management
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  // 2. Filter products (Ensure category string matches your data file)
  const filteredBlendProducts = Products.filter(
    (p) => p.category === "BlendBluffs",
  );

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
    <div className="bg-pink-200 min-h-screen font-sans p-10">
      {/* Top Breadcrumb */}
      <Breadcrumb className="flex items-center gap-2 py-6 px-10">
        <BreadcrumbItem className="flex items-center gap-2">
          <Link
            to="/"
            className="text-sm uppercase hover:text-pink-600 transition-all duration-300 tracking-wide"
          >
            Home
          </Link>
        </BreadcrumbItem>
        <ChevronRight size={17} strokeWidth={2} />
        <BreadcrumbItem className="flex items-center gap-2">
          <Link
            to="/wishlist"
            className="text-sm uppercase hover:text-pink-600 transition-all duration-300 tracking-wide"
          >
            Wishlist
          </Link>
        </BreadcrumbItem>
        <ChevronRight size={17} strokeWidth={2} />
        <BreadcrumbItem>
          <Link
            to="/shopall"
            className="text-sm uppercase hover:text-pink-600 transition-all duration-300 tracking-wide"
          >
            Shop All
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <div id="shop-all" className="max-w-7xl mx-auto mt-16">
        <h1 className="text-4xl text-[#7D4E5B] text-center font-serif mb-3">
          Our Collections
        </h1>
        <div className="h-1 w-24 bg-pink-800 mx-auto mb-20 rounded-full"></div>

        <h2 className="text-3xl text-pink-800 font-semibold mb-8 text-center">
          Blend & Bluffs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
          {filteredBlendProducts.map((p) => (
            <div
              key={p.id}
              className="bg-pink-50 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 group p-4"
            >
              <div className="relative overflow-hidden mb-4 h-72 rounded-xl">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* 3. Corrected Wishlist Button Logic */}
                <div
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-pink-100"
                  onClick={() => toggleWishlist(p as Product)}
                >
                  {wishlist.some((item) => item.id === p.id) ? (
                    <Heart className="fill-pink-600 text-pink-600" />
                  ) : (
                    <Heart className="text-pink-700" />
                  )}
                </div>
              </div>

              <h3 className="text-md text-gray-600 italic text-center">
                {p.title}
              </h3>

              <p className="text-lg font-semibold text-pink-900 text-center mt-1">
                {p.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlendBuffs;
