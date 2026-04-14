import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Catalog from "./Catalog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlistCount(ids.length);
  }, []);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide header
        setIsVisible(false);
      } else {
        // scrolling up → show header
        setIsVisible(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full z-50 sticky top-0 transition-transform duration-500 ${
        isVisible ? "translate-y-0 shadow-sm" : "-translate-y-full"
      }`}
    >
      {/* Top Announcement */}
      <div className="bg-black text-white text-xs py-1.5 text-center uppercase tracking-widest">
        Free shipping on orders over $150
      </div>

      {/* Main Navigation */}
      <nav className="bg-pink-200 dark:bg-slate-950 px-8 lg:px-18 py-4 flex items-center justify-between relative">
        <button
          className="md:hidden order-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden md:flex gap-6 font-medium text-sm uppercase tracking-wide order-1 w-1/3">
          <Link to="/" className="hover:text-pink-700">
            Home
          </Link>
            <Catalog />
          <Link to="/Contact" className="hover:text-pink-700">
            Contact
          </Link>
        </div>

        <div className="text-center flex-1 order-2">
          <h1 className="text-3xl font-script leading-tight italic uppercase font-bold">
            veloura
          </h1>
        </div>

        <div className="flex gap-4 order-3 w-1/3 justify-end relative">
          <Link to="/wishlist" className="relative">
            <ShoppingBag size={25} className="hover:text-pink-700" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-pink-200 border-t border-black/10 flex flex-col p-6 gap-4 text-sm uppercase md:hidden z-50">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Catalog />
          <Link to="/Contact">
            Contact
          </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
