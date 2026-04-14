import { Products } from "@/types/product";
import { useParams } from "react-router-dom";


function ProductDetails() {
  const { id } = useParams(); //1
  const loading = false

  // 1-7
  const product = Products.find((p) => p.id === id); //1 === 8

  if (!product) {
    return <div className="text-center py-20 text-xl">Product Not Found</div>;
  }
if (loading) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 animate-pulse">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Skeleton */}
        <div className="bg-gray-200 rounded-2xl h-100 w-full"></div>

        {/* Text Skeleton */}
        <div className="space-y-6">
          
          {/* Title */}
          <div className="h-10 bg-gray-200 rounded w-2/3"></div>

          {/* Price */}
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>

          {/* Description */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>

          {/* Quantity */}
          <div className="h-10 bg-gray-200 rounded w-32"></div>

          {/* Buttons */}
          <div className="flex gap-4">
            <div className="h-12 bg-gray-200 rounded w-40"></div>
            <div className="h-12 bg-gray-200 rounded w-40"></div>
          </div>

        </div>
      </div>
    </div>
  );
}

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Product Image */}
        <div className="bg-gray-100 p-8 rounded-2xl">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-100 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold">{product.title}</h1>

          <p className="text-2xl text-pink-600 font-medium">
            {product.price}
          </p>

          <p className="text-gray-500 leading-relaxed">
            Enhance your beauty with our premium {product.title}. 
            Designed with high-quality ingredients to give you 
            a smooth and long-lasting finish.
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity</span>
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-20 border rounded-lg px-3 py-2"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-xl transition">
              Add to Cart
            </button>

            <button className="border px-8 py-3 rounded-xl hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;