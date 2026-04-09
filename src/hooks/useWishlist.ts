import { useEffect, useState } from "react";

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const addToWishlist = (item: any) => {
    const newWishlist = [...wishlist, item];
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  const removeFromWishlist = (item: any) => {
    const newWishlist = wishlist.filter((i) => i.id !== item.id);
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  return { wishlist, addToWishlist, removeFromWishlist };
};