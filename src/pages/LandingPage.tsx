import Header from "../components/Header";
import Hero from "../components/Hero";
import BestSeller from "../components/BestSeller";
import About from "../components/About";
import Footer from "../components/Footer";
import Collection from "../components/Collection";
import LetsConnect from "../components/LetsConnect";
import Testimonial from "@/components/Testimonial";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Collection />
      <About />
      <BestSeller />
      <LetsConnect />
      <Testimonial />

      <Footer />
    </div>
  );
};

export default LandingPage;
