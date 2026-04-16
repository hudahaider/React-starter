import { Breadcrumb, BreadcrumbItem } from "../components/ui/breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Heart } from "lucide-react";
import { toast } from "sonner";
import { Products } from "@/types/product";
import { useWishlist } from "@/hooks/useWishlist";

// Define Product type locally if not exported from types
type Product = {
  id: string;
  img: string;
  title: string;
  price: string;
  category: string;
};

const ShopallPage = () => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

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

  // Filtering products by category
  const MakeupEssentials = Products.filter(
    (p) => p.category === "MakeupEssentials",
  );
  const BlendBluffs = Products.filter((p) => p.category === "BlendBluffs");
  const HairAccessories = Products.filter(
    (p) => p.category === "HairAccessories",
  );
  const PreetyGems = Products.filter((p) => p.category === "PreetyGems");

  return (
    <div className="bg-pink-200 dark:bg-slate-950 min-h-screen font-sans p-10">
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
            className="text-sm uppercase text-pink-600 transition-all duration-300 tracking-wide"
          >
            Shop all
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Hero Section */}
      <header className="px-6 py-12 lg:py-20 flex flex-col lg:flex-row gap-14 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl lg:text-7xl font-serif text-[#7D4E5B] dark:text-white leading-tight">
            Pink For <br /> Every Glow
          </h1>
          <p className="text-lg text-[#A67C86] dark:text-gray-500 max-w-md">
            We provide elegant, high-quality cosmetics and accessories that
            speak to your sense of style and identity.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("shop-all")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-pink-900 dark:bg-slate-500 hover:bg-pink-700 dark:hover:bg-slate-700 text-white px-8 py-3 rounded-full w-fit transition-all duration-300 shadow-sm"
          >
            Shop All
          </button>
        </div>

        <div className="flex-1 grid grid-rows-2 gap-4 h-125">
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/assets/shopall.jpg"
              alt="Pink Jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/assets/shopall img1.jpg"
              alt="Cosmetic Detail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* SHOP ALL SECTION */}
      <div id="shop-all" className="max-w-7xl mx-auto mt-16">
        <h1 className="text-4xl text-[#7D4E5B] dark:text-white text-center font-serif mb-3">
          Shop All
        </h1>
        <div className="h-1 w-24 bg-pink-800 dark:bg-white mx-auto mb-20 rounded-full"></div>

        {/* Render Sections Helper */}
        {[
          { title: "Makeup Essentials", data: MakeupEssentials },
          { title: "Blend & Bluffs", data: BlendBluffs },
          { title: "Hair Accessories", data: HairAccessories },
          { title: "Pretty Little Gems", data: PreetyGems },
        ].map((section) => (
          <div key={section.title}>
            <h2 className="text-3xl text-pink-800 dark:text-white font-semibold mb-8 text-center">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
              {section.data.map((p) => (
                <div
                  onClick={() => navigate(`/product/${p.id}`)}
                  key={p.id}
                  className="bg-pink-50 dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 group p-4"
                >
                  <div className="relative overflow-hidden mb-4 h-72 rounded-xl">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div
                      className="absolute top-3 right-3 bg-white dark:bg-slate-800 p-2 rounded-full shadow-md cursor-pointer hover:bg-pink-100"
                      onClick={() => toggleWishlist(p as Product)}
                    >
                      {wishlist.some((item) => item.id === p.id) ? (
                        <Heart className="fill-pink-600 text-pink-600" />
                      ) : (
                        <Heart className="text-pink-700 dark:text-white" />
                      )}
                    </div>
                  </div>
                  <h3 className="text-md text-gray-600 dark:text-white italic text-center">
                    {p.title}
                  </h3>
                  <p className="text-lg font-semibold text-pink-900 text-center mt-1">
                    {p.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopallPage;
