import { BrowserRouter, Routes, Route } from "react-router-dom";
import WishlistPage from "./pages/WishlistPage";
import LandingPage from "./pages/LandingPage";
import ShopallPage from "./pages/ShopallPage";
import MakeupEssentials from "./pages/MakeupEssentials";
import BlendBuffs from "./pages/BlendBuffs";
import HairAccessories from "./pages/HairAccessories";
import PrettyGems from "./pages/PrettyGems";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/shopall" element={<ShopallPage />} />
        <Route path="/MakeupEssentials" element={<MakeupEssentials />} />
        <Route path="/BlendBuffs" element={<BlendBuffs />} />
        <Route path="/HairAccessories" element={<HairAccessories />} />
        <Route path="/PrettyGems" element={<PrettyGems />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/Contact" element={<Contact />} />
        <Route path="/Checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
