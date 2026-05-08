import ProductCard from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"

const smartphones = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 1499000,
    originalPrice: 1699000,
    image: "/api/placeholder/300/300",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    specs: {
      screen: "6.7\" OLED",
      storage: "256GB",
      camera: "48MP Triple",
      battery: "4422mAh"
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1399000,
    originalPrice: 1599000,
    image: "/api/placeholder/300/300",
    rating: 4.7,
    reviews: 98,
    badge: "New",
    specs: {
      screen: "6.8\" AMOLED",
      storage: "512GB",
      camera: "200MP Quad",
      battery: "5000mAh"
    }
  },
  {
    id: 3,
    name: "Xiaomi 14 Pro",
    brand: "Xiaomi",
    price: 899000,
    originalPrice: 1099000,
    image: "/api/placeholder/300/300",
    rating: 4.6,
    reviews: 67,
    specs: {
      screen: "6.73\" AMOLED",
      storage: "256GB",
      camera: "50MP Leica Triple",
      battery: "4880mAh"
    }
  },
  {
    id: 4,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: 1199000,
    originalPrice: null,
    image: "/api/placeholder/300/300",
    rating: 4.5,
    reviews: 45,
    specs: {
      screen: "6.7\" LTPO OLED",
      storage: "128GB",
      camera: "50MP Triple",
      battery: "5050mAh"
    }
  },
  {
    id: 5,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 999000,
    originalPrice: null,
    image: "/api/placeholder/300/300",
    rating: 4.4,
    reviews: 38,
    specs: {
      screen: "6.82\" AMOLED",
      storage: "256GB",
      camera: "50MP Hasselblad Triple",
      battery: "5400mAh"
    }
  },
  {
    id: 6,
    name: "Nothing Phone (2)",
    brand: "Nothing",
    price: 749000,
    originalPrice: 849000,
    image: "/api/placeholder/300/300",
    rating: 4.3,
    reviews: 29,
    badge: "Sale",
    specs: {
      screen: "6.7\" AMOLED",
      storage: "256GB",
      camera: "50MP Dual",
      battery: "4700mAh"
    }
  }
]

export default function SmartphonesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-3 mb-4">
            <Smartphone className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Smartphones</h1>
          </div>
          <p className="text-lg opacity-90 max-w-3xl">
            Discover the latest smartphones with cutting-edge technology, premium cameras, 
            and powerful performance. Choose from top brands like Apple, Samsung, Xiaomi, and more.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
                <option>Newest First</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Showing {smartphones.length} products</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smartphones.map((phone) => (
            <ProductCard key={phone.id} product={phone} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  )
}
