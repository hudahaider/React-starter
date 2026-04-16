import { Breadcrumb, BreadcrumbItem } from "../components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { ChevronRight, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useWishlist } from "@/hooks/useWishlist";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Product = {
  id: string;
  img: string;
  title: string;
  price: string;
};

export default function WishlistPage() {
  const navigate = useNavigate();
  const handleCheckoutRedirect = () => {
    navigate("/Checkout", { state: { selectedItems, subtotal } });
  };

  const { wishlist, removeFromWishlist } = useWishlist();

  // State to track which items are selected for checkout
  const [selectedItems, setSelectedItems] = useState<Product[]>([]);

  const handleRemove = (product: Product) => {
    removeFromWishlist(product);
    setSelectedItems(selectedItems.filter((item) => item.id !== product.id));
    toast.success(`${product.title} removed from wishlist`);
  };

  const toggleSelect = (product: Product) => {
    const isAlreadySelected = selectedItems.find(
      (item) => item.id === product.id,
    );
    if (isAlreadySelected) {
      setSelectedItems(selectedItems.filter((item) => item.id !== product.id));
    } else {
      setSelectedItems([...selectedItems, product]);
    }
  };

  // Calculate Subtotal (strips currency symbols and converts to number)
  const subtotal = selectedItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return acc + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <div className="min-h-screen bg-pink-200 dark:bg-slate-950 p-5 md:p-10 font-sans">
      <Breadcrumb className="flex items-center gap-2 py-6 px-4 md:px-10">
        <BreadcrumbItem>
          <Link
            to="/"
            className="text-sm uppercase hover:text-pink-600 dark:text-gray-300 transition-all"
          >
            Home
          </Link>
        </BreadcrumbItem>
        <ChevronRight
          size={17}
          strokeWidth={2}
          className="dark:text-gray-500"
        />
        <BreadcrumbItem>
          <Link
            to="/shopall"
            className="text-sm uppercase hover:text-pink-600 dark:text-gray-300 transition-all"
          >
            Shop All
          </Link>
        </BreadcrumbItem>
        <ChevronRight
          size={17}
          strokeWidth={2}
          className="dark:text-gray-500"
        />
        <BreadcrumbItem>
          <span className="text-sm uppercase text-pink-600 ">Wishlist</span>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="max-w-7xl mx-auto mt-6 flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Side: Wishlist Products */}
        <div className="flex-1 w-full">
          <h1 className="text-4xl text-[#7D4E5B] dark:text-white mb-2 text-center lg:text-left">
            My Wishlist
          </h1>
          <div className="h-1 w-24 bg-pink-900 dark:bg-white mb-10 mx-auto lg:mx-0"></div>

          {wishlist.length === 0 ? (
            <p className="text-center lg:text-left text-lg text-[#A67C86] dark:text-gray-500">
              Your wishlist is empty 💔
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {wishlist.map((product) => {
                const isSelected = selectedItems.some(
                  (item) => item.id === product.id,
                );
                return (
                  <div
                    onClick={() => toggleSelect(product)}
                    key={product.id}
                    className={`bg-white cursor-pointer dark:bg-slate-800 rounded-xl shadow-md p-4 transition-all border-2 ${isSelected ? "border-pink-500 ring-2 ring-pink-200" : "border-transparent"}`}
                  >
                    <div className="relative group">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="h-56 w-full object-cover rounded-lg mb-4"
                      />
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelect(product)}
                        className="absolute top-3 left-3 w-5 h-5 accent-pink-600 cursor-pointer"
                      />
                    </div>
                    <h2 className="text-lg font-medium text-slate-700 dark:text-white italic">
                      {product.title}
                    </h2>
                    <p className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      {product.price}
                    </p>

                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleSelect(product)}
                        className={`flex-1 py-2 rounded-lg font-medium transition ${isSelected ? "bg-pink-100 text-pink-700" : "bg-pink-600 text-white hover:bg-pink-700"}`}
                      >
                        {isSelected ? "Selected" : "Select for Checkout"}
                      </button>
                      <button
                        onClick={() => handleRemove(product)}
                        className="p-2 bg-red-100 text-red-500 rounded-lg hover:bg-red-200 transition"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Side: Checkout Sidebar (Sticky) */}
        {selectedItems.length > 0 && (
          <div className="w-full lg:w-100 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-pink-100 dark:border-slate-800 sticky top-10 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 dark:border-slate-800 pb-4">
              <ShoppingBag className="text-pink-600" />
              <h2 className="text-2xl font-bold dark:text-white">
                Order Summary
              </h2>
            </div>

            <div className="space-y-4 mb-6 max-h-87 overflow-y-auto pr-2 custom-scrollbar">
              {selectedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-pink-50 dark:bg-slate-800/50 p-2 rounded-lg"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold dark:text-white truncate">
                      {item.title}
                    </p>
                    <p className="text-pink-600 font-bold">{item.price}</p>
                  </div>
                  <button
                    onClick={() => toggleSelect(item)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-gray-100 dark:border-slate-800 pt-4">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Items Selected</span>
                <span>{selectedItems.length}</span>
              </div>
              <div className="flex justify-between text-xl font-bold dark:text-white">
                <span>Total</span>
                <span className="text-pink-600">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckoutRedirect}
              className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pink-200 dark:shadow-none active:scale-95"
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
