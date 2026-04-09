import {
  SiFacebook,
  SiInstagram,
  SiSnapchat,
  SiTiktok,
  SiYoutube,
} from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pink-200 py-5 px-6 lg:px-20 border-black border-t ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-10">
        {/* Left Side */}
        <div>
          <h1 className="text-4xl font-serif tracking-widest text-gray-800">
            VELOURA
          </h1>
          <p className="italic text-lg text-gray-700 mt-2">
            Beauty & Accessories
          </p>
          <p className="mt-4 text-gray-600">All Things Beauty</p>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Veloura Beauty
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Veloura celebrates beauty beyond makeup. Our collection of
            cosmetics, jewelry, hair accessories, brushes, and beauty tools is
            designed to enhance your natural glow while helping you express your
            unique style with elegance and confidence.
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-20 text-gray-700">
        <Link to="https://facebook.com">
          <SiSnapchat className="cursor-pointer text-lg hover:text-pink-700 transition" />
        </Link>

        <Link to="https://instagram.com">
          <SiInstagram className="cursor-pointer text-lg hover:text-pink-700 transition" />
        </Link>

        <Link to="https://youtube.com">
          <SiTiktok className="cursor-pointer text-lg hover:text-pink-700 transition" />
        </Link>

        <Link to="https://facebook.com">
          <SiFacebook className="cursor-pointer text-lg hover:text-pink-700 transition" />
        </Link>

        <Link to="https://youtube.com">
          <SiYoutube className="cursor-pointer text-lg hover:text-pink-700 transition" />
        </Link>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-600 text-sm mt-7">
        © {new Date().getFullYear()} Veloura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
