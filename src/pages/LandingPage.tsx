import Hero from "../components/Hero";
import BestSeller from "../components/BestSeller";
import About from "../components/About";
import Collection from "../components/Collection";
import LetsConnect from "../components/LetsConnect";
import Testimonial from "@/components/Testimonial";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Collection />
      <About />
      <BestSeller />
      <LetsConnect />
      <Testimonial />
    </div>
  );
};

export default LandingPage;
