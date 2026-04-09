import Header from "../components/Header";
import Hero from "../components/Hero";
import BestSeller from "../components/BestSeller";
import About from "../components/About";
import Footer from "../components/Footer";
import Collection from "../components/Collection";
import LetsConnect from "../components/LetsConnect";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Collection />
      <About />
      <BestSeller />
      <LetsConnect />
      <Footer />
    </div>
  );
};

export default LandingPage;
