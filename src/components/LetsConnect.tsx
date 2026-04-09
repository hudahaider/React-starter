import { SiInstagram } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const images = [
  "/assets/lets connect model 2.jpg",
  "/assets/brushe-4.jpg",
  "/assets/eyeliner.jpg",
  "/assets/lets connect model 1.jpg",
  "/assets/lipstick.jpg",
  "/assets/lets connect model.jpg",
  "/assets/gloss.jpg",
];

const LetsConnect = () => {
  return (
    <section className="bg-pink-100 py-20 text-center relative">
      {/* Heading */}
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-sans mb-4 tracking-wide uppercase flex items-center justify-center gap-3">
          {/* This wrapper keeps the icon attached to the word */}
          <span className="relative inline-block">
            LET'S
            <SiInstagram className="absolute -top-15 right- md:-top-10 md:right-40 text-6xl md:text-8xl text-white " />
          </span>
          <span>CONNECT</span>
        </h2>
        <h2 className="text-4xl md:text-5xl font-sans italic uppercase">
          On Instagram
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[EffectCoverflow]} // Provide the module here
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"} // "auto" is best for the overlapping fan look
          loop={true}
          coverflowEffect={{
            rotate: 30, // Tilt angle
            stretch: -10, // Negative value creates the overlap in your image
            depth: 300, // Makes the side images smaller/further back
            modifier: 1,
            slideShadows: false, // Set to true if you want depth shadows
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} style={{ width: "300px" }}>
              <div className="overflow-hidden rounded-sm border-4 border-white shadow-lg">
                <img
                  src={img}
                  alt="beauty"
                  className="w-full h-80 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LetsConnect;
