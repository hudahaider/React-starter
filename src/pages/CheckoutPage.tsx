import { useLocation, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, CreditCard, Truck } from "lucide-react";
import { toast } from "sonner";

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the passed items from the Wishlist page
  const { selectedItems, subtotal } = location.state || {
    selectedItems: [],
    subtotal: 0,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order placed successfully! 💖");
    // Redirect to a success page or home
    setTimeout(() => navigate("/"), 2000);
  };

  if (selectedItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-10">
        <h2 className="text-2xl font-bold mb-4">
          No items selected for checkout
        </h2>
        <Link
          to="/wishlist"
          className="bg-pink-600 text-white px-6 py-2 rounded-lg"
        >
          Return to Wishlist
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-100 dark:bg-slate-950 p-5 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/wishlist"
          className="flex items-center gap-2 text-pink-600 mb-8 hover:underline"
        >
          <ChevronLeft size={20} /> Back to Wishlist
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Shipping Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
              <Truck className="text-pink-600" /> Shipping Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  placeholder="First Name"
                  className="p-3 bg-pink-50 dark:bg-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-pink-500 dark:text-white"
                />
                <input
                  required
                  placeholder="Last Name"
                  className="p-3 bg-pink-50 dark:bg-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-pink-500 dark:text-white"
                />
              </div>
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-pink-50 dark:bg-slate-800 rounded-lg outline-none"
              />
              <input
                required
                placeholder="Street Address"
                className="w-full p-3 bg-pink-50 dark:bg-slate-800 rounded-lg outline-none"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  placeholder="City"
                  className="p-3 bg-pink-50 dark:bg-slate-800 rounded-lg outline-none"
                />
                <input
                  required
                  placeholder="Zip Code"
                  className="p-3 bg-pink-50 dark:bg-slate-800 rounded-lg outline-none"
                />
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-6 flex items-center gap-2 dark:text-white">
                <CreditCard className="text-pink-600" /> Payment Details
              </h2>
              <div className="space-y-4">
                <input
                  required
                  placeholder="Card Number"
                  className="w-full p-3 bg-pink-50 dark:bg-slate-800 rounded-lg outline-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="MM / YY"
                    className="p-3 bg-pink-50 dark:bg-slate-800 rounded-lg outline-none"
                  />
                  <input
                    required
                    placeholder="CVC"
                    className="p-3 bg-pink-50 dark:bg-slate-800 rounded-lg outline-none"
                  />
                </div>
              </div>

              <button className="w-full mt-8 bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95">
                Pay Now ${subtotal.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Right Side: Order Summary */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-pink-100">
              <h2 className="text-xl font-bold mb-4 dark:text-white">
                Review Order
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {selectedItems.map((item: any) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <img
                      src={item.img}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm dark:text-white">
                        {item.title}
                      </p>
                      <p className="text-pink-600 font-bold">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-2">
                <div className="flex justify-between dark:text-gray-400">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold dark:text-white">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-pink-600/10 rounded-xl border border-pink-200">
              <p className="text-xs text-pink-700 text-center italic">
                Your purchase is protected by 256-bit SSL encryption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
