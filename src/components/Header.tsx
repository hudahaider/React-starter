import React, { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Announcement */}
      <div className="bg-black text-white text-xs py-1.5 text-center uppercase tracking-widest">
        Free shipping on orders over $150
      </div>

      {/* Main Navigation */}
      <nav className="bg-pink-200 px-8 lg:px-18 py-4 flex items-center justify-between relative">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden order-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-medium text-sm uppercase tracking-wide order-1 w-1/3">
          <a href="#" className="hover:text-pink-700 hover:opacity-70">
            Home
          </a>
          <a href="#" className="hover:text-pink-700 hover:opacity-70">
            Catalog
          </a>
          <a href="#" className="hover:text-pink-700 hover:opacity-70">
            Contact
          </a>
        </div>

        {/* Logo */}
        <div className="text-center flex-1 order-2">
          <h1 className="text-2xl md:text-2xl font-serif leading-tight">
            COSMETICS
          </h1>
          <p className="text-sm italic -mt-1">By Chloe</p>
        </div>

        {/* Icons */}
        <div className="flex gap-4 order-3 w-1/3 justify-end">
          <Link to="/wishlist">
            <ShoppingBag
              size={25}
              className="cursor-pointer hover:text-pink-700"
            />
          </Link>
        </div>

        {/* On Mobile */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-pink-200 border-t border-black/10 flex flex-col p-6 gap-4 text-sm uppercase md:hidden z-50">
            <a href="#">Home</a>
            <a href="#">Catalog</a>
            <a href="#">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
