import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative h-full w-full">
        <img
          src="\assets\hero bg2.png"
          alt="Cosmetics Model"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-8xl font-serif tracking-tighter uppercase mb-2 lg:mb-3">
            Cosmetics
          </h1>
          <p className="text-xl md:text-5xl font-script italic lowercase tracking-wide drop-shadow-lg">
            Shop the sale
          </p>

          {/* Button */}
          <Link to="/shopall">
            <button className="mt-4 md:mt-20 bg-black text-white text-xs lg:text-lg uppercase tracking-widest px-3 py-1 md:px-8 md:py-3 hover:bg-white hover:text-black transition-colors border border-black">
              Shop All
            </button>
          </Link>
        </div>
      </div>

      {/* Autoplay Bottom line */}
      <div className="bg-black text-white py-3 border-t border-white/20 marquee-swiper">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          speed={5000}
          slidesPerView="auto"
          allowTouchMove={false}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {[...Array(15)].map((_, i) => (
            // !w-auto is critical to keep the text from stretching
            <SwiperSlide key={i} className="!w-auto">
              <div className="flex items-center uppercase text-sm tracking-widest px-10">
                <span> • Shop The Sale</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
