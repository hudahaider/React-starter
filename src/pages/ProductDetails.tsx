import { Products } from "@/types/product";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Heart, ChevronRight } from "lucide-react";
import { Breadcrumb, BreadcrumbItem } from "../components/ui/breadcrumb";
import { useWishlist } from "@/hooks/useWishlist";
import { toast } from "sonner";

function ProductDetails() {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState("Pink");
  const loading = false;

  const product = Products.find((p) => p.id === id);

  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = wishlist.some((item) => item.id === product?.id);

  // Wishlist Toggle with Sonner Toast
  const handleWishlistToggle = () => {
    if (!product) return;
    if (isWishlisted) {
      removeFromWishlist(product);
      toast.success(`${product.title} removed from wishlist`);
    } else {
      addToWishlist(product);
      toast.success(`${product.title} added to wishlist!`, {
        description: "Check your wishlist to see all saved items.",
      });
    }
  };

  // Add to Cart Toast trigger
  const handleAddToCart = () => {
    if (!product) return;
    toast.success(`${product.title} added to cart!`, {
      style: {
        background: "#FDF2F8",
        color: "#DB2777",
        border: "1px solid #FBCFE8",
      },
    });
  };

  const colors = [
    { name: "Blush", class: "bg-pink-200" },
    { name: "Hot Pink", class: "bg-pink-500" },
    { name: "Deep Rose", class: "bg-pink-700" },
    { name: "Soft Peach", class: "bg-orange-100" },
  ];

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-light">
        Product Not Found
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 animate-pulse">
        <div className="h-6 bg-gray-200 w-1/3 mb-10 rounded"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-2xl h-75 md:h-125 w-full"></div>
          <div className="space-y-6">
            <div className="h-10 bg-gray-200 rounded w-2/3"></div>
            <div className="h-12 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-200 dark:bg-slate-950 p-5 sm:p-6 md:p-10 font-serif">
      {/* Breadcrumb section - Responsive text and spacing */}
      <Breadcrumb className="flex flex-wrap items-center gap-1 sm:gap-2 py-4 px-2 md:px-10">
        <BreadcrumbItem className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/"
            className="text-sm sm:text-sm uppercase hover:text-pink-600 dark:text-gray-300 transition-all duration-300 tracking-wide"
          >
            Home
          </Link>
        </BreadcrumbItem>

        <ChevronRight
          size={17}
          strokeWidth={2}
          className="dark:text-gray-500"
        />

        <BreadcrumbItem className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/shopall"
            className="text-sm sm:text-sm uppercase hover:text-pink-600 dark:text-gray-300 transition-all duration-300 tracking-wide"
          >
            Shop All
          </Link>
        </BreadcrumbItem>

        <ChevronRight
          size={17}
          strokeWidth={2}
          className="dark:text-gray-500"
        />

        <BreadcrumbItem className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/wishlist"
            className="text-sm sm:text-sm uppercase hover:text-pink-600 dark:text-gray-300 transition-all duration-300 tracking-wide"
          >
            wishlist
          </Link>
        </BreadcrumbItem>

        <ChevronRight
          size={17}
          strokeWidth={2}
          className="dark:text-gray-500"
        />

        <BreadcrumbItem>
          <span className="text-sm sm:text-sm uppercase text-pink-600 font-bold tracking-wide truncate max-w-30 sm:max-w-none">
            {product.title}
          </span>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Main Container - Responsive Grid */}
      <div className="max-w-7xl mx-auto mt-4 p-4 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start bg-pink-50 dark:bg-slate-900 rounded-lg shadow-xl">
        {/* Left Side: Product Images */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm">
            <img
              src={product.img}
              alt={product.title}
              className="w-full aspect-square sm:aspect-4/5 object-cover"
            />
          </div>
          {/* Thumbnails - Horizontal scroll on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 shrink-0 cursor-pointer hover:opacity-70 transition border border-gray-200"
              >
                <img
                  src={product.img}
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-gray-900 dark:text-white leading-tight">
              {product.title}
            </h1>
            <p className="text-xl md:text-2xl text-pink-600 font-bold italic">
              {product.price}
            </p>
          </div>

          <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
            <p>
              Enhance your lifestyle with our premium {product.title}. Designed
              exclusively for our pink-themed collection with high-quality
              materials for a long-lasting, luxury finish.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Color Selection */}
            <div className="space-y-4">
              <label className="text-[10px] sm:text-xs font-bold text-gray-900 dark:text-gray-200 uppercase tracking-widest">
                Choose Color:{" "}
                <span className="text-pink-500 font-normal ml-2">
                  {selectedColor}
                </span>
              </label>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all duration-300 hover:scale-110 hover:shadow-md ${
                      selectedColor === color.name
                        ? "border-pink-500 scale-110 shadow-md"
                        : "border-transparent"
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-full border border-gray-200 ${color.class}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-[10px] sm:text-xs font-bold text-gray-900 dark:text-gray-200 uppercase tracking-widest">
                Quantity
              </label>
              <div className="relative w-20 sm:w-24">
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-full border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-sm px-3 py-2 sm:py-3 text-sm focus:ring-1 focus:ring-pink-500 outline-none transition"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 md:space-y-4 pt-4 md:pt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gray-800 hover:bg-black text-white font-bold py-3 sm:py-4 rounded-sm transition-colors uppercase text-[10px] sm:text-xs tracking-[0.2em]"
              >
                Add to Cart
              </button>
              {/* Interactive Heart Button with Sonner integration */}
              <button
                onClick={handleWishlistToggle}
                className={`py-3 px-5 border transition-all duration-300 rounded-sm group flex justify-center items-center ${
                  isWishlisted
                    ? "bg-pink-50 border-pink-200"
                    : "border-gray-300 dark:border-slate-700 hover:bg-pink-50 dark:hover:bg-slate-800"
                }`}
              >
                <Heart
                  className={`w-5 h-5 transition-all duration-300 ${
                    isWishlisted
                      ? "fill-pink-500 text-pink-500 scale-110"
                      : "text-gray-400 group-hover:text-pink-500"
                  }`}
                />
              </button>
            </div>
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 sm:py-5 rounded-sm transition-all uppercase text-[10px] sm:text-xs tracking-[0.2em] shadow-lg shadow-pink-100">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
