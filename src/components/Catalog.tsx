import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Catalog Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 font-medium hover:text-pink-500"
      >
        Catalog <ChevronDown size={18} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-8 left-0 w-56 bg-pink-200/30 dark:bg-slate-600/30 backdrop-blur-xl  shadow-lg rounded-lg p-4 z-50">
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link
                to="/MakeupEssentials"
                className="hover:text-pink-700 transition"
              >
                Makeup Essentials
              </Link>
            </li>

            <li>
              <Link to="/BlendBuffs" className="hover:text-pink-700 transition">
                Brush & Bluffs
              </Link>
            </li>

            <li>
              <Link
                to="/HairAccessories"
                className="hover:text-pink-700 transition"
              >
                Hair Accessories
              </Link>
            </li>

            <li>
              <Link to="/PrettyGems" className="hover:text-pink-700 transition">
                Pretty Little Gems
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Catalog;
