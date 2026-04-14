import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-pink-200 dark:bg-slate-950  min-h-screen font-sans p-10">
         <Breadcrumb className="flex items-center gap-2 py-6 px-10">
        {/* Item 1*/}
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

        {/* Item 2*/}
        <BreadcrumbItem className="flex items-center gap-2">
          <Link
            to="/shopall"
            className="text-sm uppercase hover:text-pink-600 transition-all duration-300 tracking-wide"
          >
            Shop All
          </Link>
        </BreadcrumbItem>

        {/* Separator Icon */}
        <ChevronRight size={17} strokeWidth={2} />

        {/* Item 3 */}
        <BreadcrumbItem>
          <Link
            to="/wishlist"
            className="text-sm uppercase hover:text-pink-600 transition-all duration-300 tracking-wide"
          >
            Wishlist
          </Link>
        </BreadcrumbItem>

        {/* Separator Icon */}
        <ChevronRight size={17} strokeWidth={2} />

        {/* Item 4 */}
        <BreadcrumbItem>
          <Link
            to="/Contact"
            className="text-sm uppercase hover:text-pink-600 transition-all duration-300 tracking-wide"
          >
            Contact
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>

    <div className="flex items-center justify-center px-6 py-16">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-10">
        
        {/* Left Side Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-pink-500 dark:text-white mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600  dark:text-gray-500 mb-6">
            Have questions about Veloura products? We’d love to hear from you.
            Send us a message and our team will respond as soon as possible.
          </p>

          <div className="space-y-3 text-gray-700 dark:text-gray-500">
            <p><span className="font-semibold">Email:</span> support@veloura.com</p>
            <p><span className="font-semibold">Phone:</span> +92 300 1234567</p>
            <p><span className="font-semibold">Address:</span> Karachi, Pakistan</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="border border-pink-200 dark:border-slate-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border border-pink-200 dark:border-slate-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-pink-200 dark:border-slate-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <button
            type="submit"
            className="bg-pink-500 dark:bg-slate-500 text-white py-3 rounded-lg hover:bg-pink-600 dark:hover:bg-slate-700 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;