import ProductCard from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { Laptop } from "lucide-react"

const laptops = [
  {
    id: 1,
    name: "MacBook Pro 16\"",
    brand: "Apple",
    price: 2899000,
    originalPrice: 3299000,
    image: "/api/placeholder/300/300",
    rating: 4.9,
    reviews: 89,
    badge: "Premium",
    specs: {
      processor: "M3 Pro",
      ram: "18GB",
      storage: "512GB SSD",
      display: "16.2\" Liquid Retina XDR"
    }
  },
  {
    id: 2,
    name: "Dell XPS 15",
    brand: "Dell",
    price: 1899000,
    originalPrice: null,
    image: "/api/placeholder/300/300",
    rating: 4.7,
    reviews: 76,
    specs: {
      processor: "Intel Core i7-13700H",
      ram: "16GB",
      storage: "1TB SSD",
      display: "15.6\" FHD+"
    }
  },
  {
    id: 3,
    name: "ThinkPad X1 Carbon",
    brand: "Lenovo",
    price: 2299000,
    originalPrice: 2599000,
    image: "/api/placeholder/300/300",
    rating: 4.8,
    reviews: 112,
    badge: "Business",
    specs: {
      processor: "Intel Core i7-1365U",
      ram: "16GB",
      storage: "1TB SSD",
      display: "14\" 2.8K"
    }
  },
  {
    id: 4,
    name: "ROG Zephyrus G16",
    brand: "ASUS",
    price: 2499000,
    originalPrice: null,
    image: "/api/placeholder/300/300",
    rating: 4.6,
    reviews: 54,
    badge: "Gaming",
    specs: {
      processor: "AMD Ryzen 9 7940HS",
      ram: "32GB",
      storage: "1TB SSD",
      display: "16\" 2.5K 165Hz"
    }
  },
  {
    id: 5,
    name: "HP Spectre x360",
    brand: "HP",
    price: 1799000,
    originalPrice: 1999000,
    image: "/api/placeholder/300/300",
    rating: 4.5,
    reviews: 43,
    badge: "2-in-1",
    specs: {
      processor: "Intel Core i7-1355U",
      ram: "16GB",
      storage: "512GB SSD",
      display: "13.5\" 3K2K"
    }
  },
  {
    id: 6,
    name: "Surface Laptop 5",
    brand: "Microsoft",
    price: 1599000,
    originalPrice: null,
    image: "/api/placeholder/300/300",
    rating: 4.4,
    reviews: 67,
    specs: {
      processor: "Intel Core i7-1255U",
      ram: "16GB",
      storage: "256GB SSD",
      display: "13.5\" PixelSense"
    }
  }
]

export default function LaptopsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-3 mb-4">
            <Laptop className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Laptops</h1>
          </div>
          <p className="text-lg opacity-90 max-w-3xl">
            High-performance laptops for work, gaming, and creativity. Choose from premium brands 
            offering cutting-edge processors, stunning displays, and innovative designs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
                <option>Newest First</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Showing {laptops.length} products</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laptops.map((laptop) => (
            <ProductCard key={laptop.id} product={laptop} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  )
}
