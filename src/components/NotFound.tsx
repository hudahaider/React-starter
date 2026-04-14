import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-6 py-12 lg:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Content */}
        <div className="text-center lg:text-left">
          <p className="text-9xl font-black text-indigo-600 animate-bounce">
            404
          </p>
          
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Page not found
          </h1>
          
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
            Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or perhaps it never existed in the first place.
          </p>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
            <Link to="/">
              <Button variant="outline" className="bg-slate-300 dark:bg-slate-800">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Bottom element */}
          <div className="mt-16 relative max-w-sm mx-auto lg:mx-0">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-400 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center lg:justify-start text-sm font-medium leading-6">
              <span className="bg-slate-50 dark:bg-slate-950 px-4 text-slate-400 italic">
                Lost in the clouds
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center items-center">
          <img 
            src="public\assets\notfound.jpg" 
            alt="Astronaut lost in space"
            className="w-54 md:w-60 h-auto object-contain animate-[float_2s_ease-in-out_infinite]"
          /> 
        </div>
      </div>

      {/* Optional: Add this to your tailwind.config.js for the smooth floating effect */}
      <style italic>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
