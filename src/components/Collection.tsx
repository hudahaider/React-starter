import { Link } from "react-router-dom";

const collections = [
  {
    title: "Makeup Essentials",
    img: "/assets/Makeup Essentials.jpg",
    path: "/MakeupEssentials",
  },
  {
    title: "Hair Accessories",
    img: "/assets/Hair Accessories.jpg",
    path: "/HairAccessories",
  },
  {
    title: "Blend and Buff",
    img: "/assets/Blend and bluffs.jpg",
    path: "/BlendBuffs",
  },
  {
    title: "Pretty Little Gems",
    img: "/assets/Pretty Little Gems.jpg",
    path: "/PrettyGems",
  },
];

const Collection = () => {
  return (
    <section className="py-20 px-4 bg-pink-100 dark:bg-slate-950">
      {/* Title */}
      <h2 className="text-4xl font-serif text-slate-800 dark:text-white mb-15  text-center uppercase tracking-widest">
        Our Collections
      </h2>

      <div className="max-w-7xl mx-auto px-10">
        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {collections.map((item, index) => (
            // Adding Link
            <Link
              to={item.path}
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Image */}
              <div className="relative w-64 h-64 overflow-hidden rounded-full border border-slate-100 shadow-sm transition-transform duration-500 group-hover:scale-105">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-pink-900/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Label */}
              <h3 className="mt-8 text-sm font-bold text-slate-700 dark:text-white tracking-widest uppercase text-center group-hover:text-pink-600 group-hover:dark:text-pink-600 transition-colors">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
