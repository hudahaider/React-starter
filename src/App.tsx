import { BrowserRouter, Routes, Route } from "react-router-dom";
import WishlistPage from "./pages/WishlistPage";
import LandingPage from "./pages/LandingPage";
import ShopallPage from "./pages/ShopallPage";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/shopall" element={<ShopallPage />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
