import { BrowserRouter, Routes, Route } from "react-router-dom";
import WishlistPage from "./pages/WishlistPage";
import LandingPage from "./pages/LandingPage";
import ShopallPage from "./pages/ShopallPage";
import MakeupEssentials from "./pages/MakeupEssentials";
import BlendBuffs from "./pages/BlendBuffs";
import HairAccessories from "./pages/HairAccessories";
import PrettyGems from "./pages/PrettyGems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/shopall" element={<ShopallPage />} />
        <Route path="/MakeupEssentials" element={<MakeupEssentials />} />
        <Route path="/BlendBuffs" element={<BlendBuffs />} />
        <Route path="/HairAccessories" element={<HairAccessories />} />
        <Route path="/PrettyGems" element={<PrettyGems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
