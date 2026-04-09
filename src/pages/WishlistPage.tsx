import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "../components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { useWishlist } from "@/hooks/useWishlist";

type Product = {
  id: string;
  img: string;
  title: string;
  price: string;
};

const products: Product[] = [
  { id: "1", img: "/assets/lipstick.jpg", title: "Lipstick", price: "$19.99" },
  { id: "2", img: "/assets/pallete.jpg", title: "Palette", price: "$19.99" },
  { id: "3", img: "/assets/gloss.jpg", title: "Gloss", price: "$19.99" },
  { id: "4", img: "/assets/eyeliner.jpg", title: "Eye Liner", price: "$19.99" },
];

export default function WishlistPage() {
 const {wishlist, removeFromWishlist} =useWishlist()

  return (
    <div className="min-h-screen bg-pink-200 p-10 font-serif">
      <Breadcrumb className="flex items-center gap-2 py-6 px-10">
        {/* Item 1*/}
        <BreadcrumbItem className="flex items-center gap-2">
          <Link
            to="/"
            className="text-sm uppercase hover:text-pink-600 transition-all duration-300 tracking-wide"
          >
            Home
          </Link>
        </BreadcrumbItem>

        {/* Separator Icon */}
        <ChevronRight size={17} strokeWidth={2} />

        {/* Item 2*/}
        <BreadcrumbItem className="flex items-center gap-2">
          <Link
            to="/shopall"
            className="text-sm uppercase hover:text-pink-600 transition-all duration-300 tracking-wide"
          >
            Shop All
          </Link>
        </BreadcrumbItem>

        {/* Separator Icon */}
        <ChevronRight size={17} strokeWidth={2} />

        {/* Item 3 */}
        <BreadcrumbItem>
          <Link to="/wishlist" className="text-sm uppercase hover:text-pink-600 transition-all duration-300 tracking-wide">Wishlist</Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="max-w-7xl mx-auto mt-6 px-10">
        <h1 className="text-4xl  text-[#7D4E5B] text-center mb-2">
          My Wishlist
        </h1>
        <div className="h-1 w-40 bg-pink-900 mx-auto mb-15"></div>

        {/* Products */}
        {wishlist.length === 0 && (
          <p className="text-center text-lg text-[#A67C86] ">
            Your wishlist is empty 💔
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4"
            >
              <img
                src={product.img}
                alt={product.title}
                className="h-56 w-full object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-medium text-slate-700 italic">
                {product.title}
              </h2>
              <p className="text-xl font-semibold text-slate-900 mb-3">
                {product.price}
              </p>
              <button
                onClick={() => removeFromWishlist(wishlist.find((u)=>u.id))}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
