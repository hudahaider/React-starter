import { Breadcrumb, BreadcrumbItem } from "../components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { ChevronRight, Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const products = [
  {
    id: "1",
    img: "/assets/lipstick.jpg",
    title: "Lipstick",
    price: "$19.99",
    category: "MakeupEssentials",
  },
  {
    id: "2",
    img: "/assets/pallete.jpg",
    title: "Palette",
    price: "$19.99",
    category: "MakeupEssentials",
  },
  {
    id: "3",
    img: "/assets/gloss.jpg",
    title: "Gloss",
    price: "$19.99",
    category: "MakeupEssentials",
  },
  {
    id: "4",
    img: "/assets/eyeliner.jpg",
    title: "Eye Liner",
    price: "$19.99",
    category: "MakeupEssentials",
  },
  {
    id: "5",
    img: "/assets/Flower-claw1.jpg",
    title: "Flower claws",
    price: "$19.99",
    category: "HairAccessories",
  },
  {
    id: "6",
    img: "/assets/square-claw.jpg",
    title: "Square claws",
    price: "$19.99",
    category: "HairAccessories",
  },
  {
    id: "7",
    img: "/assets/Flower-claw2.jpg",
    title: "Flower claws",
    price: "$19.99",
    category: "HairAccessories",
  },
  {
    id: "8",
    img: "/assets/Scrunchie-1.jpg",
    title: "Scrunchie",
    price: "$19.99",
    category: "HairAccessories",
  },
  {
    id: "9",
    img: "/assets/Scrunchie-2.jpg",
    title: "Scrunchie",
    price: "$19.99",
    category: "HairAccessories",
  },
  {
    id: "10",
    img: "/assets/star-clip.jpg",
    title: "Star clips",
    price: "$19.99",
    category: "HairAccessories",
  },
  {
    id: "11",
    img: "/assets/brushe-4.jpg",
    title: "Makeup Brushes",
    price: "$19.99",
    category: "BlendBluffs",
  },
  {
    id: "12",
    img: "/assets/brush-1.jpg",
    title: "Makeup Brushes",
    price: "$19.99",
    category: "BlendBluffs",
  },
  {
    id: "13",
    img: "/assets/brush-2.jpg",
    title: "Makeup Brushes",
    price: "$19.99",
    category: "BlendBluffs",
  },
  {
    id: "14",
    img: "/assets/brush-3.jpg",
    title: "Makeup Brushes",
    price: "$19.99",
    category: "BlendBluffs",
  },
  {
    id: "15",
    img: "/assets/sponge-2.jpg",
    title: "Blending Sponges",
    price: "$19.99",
    category: "BlendBluffs",
  },
  {
    id: "16",
    img: "/assets/sponge-1.jpg",
    title: "Blending Sponges",
    price: "$19.99",
    category: "BlendBluffs",
  },
  {
    id: "17",
    img: "/assets/rings.jpg",
    title: "Rings",
    price: "$19.99",
    category: "PreetyGems",
  },
  {
    id: "18",
    img: "/assets/Moon braclet.jpg",
    title: "Moon Braclets",
    price: "$19.99",
    category: "PreetyGems",
  },
  {
    id: "19",
    img: "/assets/pendant.jpg",
    title: "Pendant",
    price: "$19.99",
    category: "PreetyGems",
  },
  {
    id: "20",
    img: "/assets/clover bracelet.jpg",
    title: "Clove Braclets",
    price: "$19.99",
    category: "PreetyGems",
  },
];

const ShopallPage = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const handleWishlist = (id: string) => {
    let updatedWishlist: string[];

    if (wishlist.includes(id)) {
      updatedWishlist = wishlist.filter((item) => item !== id);
      toast.success("Removed from wishlist");
    } else {
      updatedWishlist = [...wishlist, id];
      toast.success("Added to wishlist");
    }
    setWishlist(updatedWishlist);
    // localStorage.set("KeyName", "Value")
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const MakeupEssentials = products.filter(
    (p) => p.category === "MakeupEssentials",
  );
  const BlendBluffs = products.filter((p) => p.category === "BlendBluffs");
  const HairAccessories = products.filter(
    (p) => p.category === "HairAccessories",
  );
  const PreetyGems = products.filter((p) => p.category === "PreetyGems");

  return (
    <div className="bg-pink-200 min-h-screen font-sans p-10">
      {/* Top Breadcrumb */}
      <Breadcrumb className="flex items-center gap-2 py-6 px-10">
        {/* Item 1 */}
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

        {/* Item 2 */}
        <BreadcrumbItem className="flex items-center gap-2">
          <Link
            to="/wishlist"
            className="text-sm uppercase hover:text-pink-600 transition-all duration-300 tracking-wide"
          >
            Wishlist
          </Link>
        </BreadcrumbItem>

        {/* Separator Icon */}
        <ChevronRight size={17} strokeWidth={2} />

        {/* Item 3 */}
        <BreadcrumbItem>
          <Link
            to="/shopall"
            className="text-sm uppercase hover:text-pink-600 transition-all duration-300 tracking-wide"
          >
            Shop All
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Hero Section  */}
      <header className="px-6 py-12 lg:py-20 flex flex-col lg:flex-row gap-14">
        {/* Left Side Content */}
        <div className="max-w-7xl mx-auto flex flex-col justify-center space-y-6">
          <h1 className="text-4xl lg:text-7xl font-serif text-[#7D4E5B] leading-tight">
            Pink For <br /> Every Glow
          </h1>
          <p className="text-lg text-[#A67C86] max-w-md">
            We provide elegant, high-quality cosmetics and accessories that
            speak to your sense of style and identity.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("shop-all")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-pink-900 hover:bg-pink-700 text-white px-8 py-3 rounded-full w-fit transition-all duration-300 shadow-sm"
          >
            Shop All
          </button>
        </div>

        {/* Right Side Image Grid */}
        <div className="flex-1 grid grid-rows-2 gap-2 h-162">
          <div className="overflow-hidden rounded-sm shadow-md">
            <img
              src="public\assets\shopall.jpg"
              alt="Pink Jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-sm shadow-md">
            <img
              src="public\assets\Shopall img1.jpg"
              alt="Cosmetic Detail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* SHOP ALL SECTION */}
      <div id="shop-all" className="max-w-7xl mx-auto mt-16">
        {/* Heading */}
        <h1 className="text-4xl text-[#7D4E5B] text-center font-serif mb-3">
          Shop All
        </h1>

        <div className="h-1 w-24 bg-pink-800 mx-auto mb-20 rounded-full"></div>

        {/* Makeup Essentials */}
        <h2 className="text-3xl text-pink-800 font-semibold mb-8 text-center">
          Makeup Essentials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
          {MakeupEssentials.map((p) => (
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

                {/* Wishlist */}
                <div
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-pink-100"
                  onClick={() => handleWishlist(p.id)}
                >
                  {wishlist.includes(p.id) ? (
                    <Heart className="fill-pink-600 stroke-0" />
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

        {/* Blend Bluffs */}
        <h2 className="text-3xl text-pink-800 font-semibold mb-8 text-center">
          Blend & Bluffs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
          {BlendBluffs.map((p) => (
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

                <div
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-pink-100"
                  onClick={() => handleWishlist(p.id)}
                >
                  {wishlist.includes(p.id) ? (
                    <Heart className="fill-pink-600 stroke-0" />
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

        {/* Hair Accessories */}
        <h2 className="text-3xl text-pink-800 font-semibold mb-8 text-center">
          Hair Accessories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
          {HairAccessories.map((p) => (
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

                <div
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-pink-100"
                  onClick={() => handleWishlist(p.id)}
                >
                  {wishlist.includes(p.id) ? (
                    <Heart className="fill-pink-600 stroke-0" />
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

        {/* Pretty Gems */}
        <h2 className="text-3xl text-pink-800 font-semibold mb-8 text-center">
          Pretty Little Gems
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
          {PreetyGems.map((p) => (
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

                <div
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-pink-100"
                  onClick={() => handleWishlist(p.id)}
                >
                  {wishlist.includes(p.id) ? (
                    <Heart className="fill-pink-600 stroke-0" />
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

export default ShopallPage;
