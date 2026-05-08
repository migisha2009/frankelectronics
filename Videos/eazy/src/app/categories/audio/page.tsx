import ProductCard from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { Headphones } from "lucide-react"

const audioProducts = [
  {
    id: 1,
    name: "AirPods Pro 2",
    brand: "Apple",
    price: 299000,
    originalPrice: 349000,
    image: "/api/placeholder/300/300",
    rating: 4.8,
    reviews: 234,
    badge: "Best Seller",
    specs: {
      type: "True Wireless",
      noise: "Active Noise Cancellation",
      battery: "6h + 24h case",
      connectivity: "Bluetooth 5.3"
    }
  },
  {
    id: 2,
    name: "WH-1000XM5",
    brand: "Sony",
    price: 399000,
    originalPrice: null,
    image: "/api/placeholder/300/300",
    rating: 4.9,
    reviews: 189,
    specs: {
      type: "Over-Ear",
      noise: "Industry-leading ANC",
      battery: "30 hours",
      connectivity: "Bluetooth 5.2"
    }
  },
  {
    id: 3,
    name: "QuietComfort Ultra",
    brand: "Bose",
    price: 449000,
    originalPrice: 499000,
    image: "/api/placeholder/300/300",
    rating: 4.7,
    reviews: 145,
    badge: "Premium",
    specs: {
      type: "Over-Ear",
      noise: "Bose Immersive Audio",
      battery: "24 hours",
      connectivity: "Bluetooth 5.3"
    }
  },
  {
    id: 4,
    name: "Galaxy Buds2 Pro",
    brand: "Samsung",
    price: 249000,
    originalPrice: null,
    image: "/api/placeholder/300/300",
    rating: 4.6,
    reviews: 98,
    specs: {
      type: "True Wireless",
      noise: "Intelligent ANC",
      battery: "8h + 20h case",
      connectivity: "Bluetooth 5.3"
    }
  },
  {
    id: 5,
    name: "Soundcore Liberty 4",
    brand: "Anker",
    price: 149000,
    originalPrice: 179000,
    image: "/api/placeholder/300/300",
    rating: 4.5,
    reviews: 76,
    badge: "Value",
    specs: {
      type: "True Wireless",
      noise: "Adaptive ANC",
      battery: "9h + 28h case",
      connectivity: "Bluetooth 5.3"
    }
  },
  {
    id: 6,
    name: "JBL Tour Pro 2",
    brand: "JBL",
    price: 199000,
    originalPrice: null,
    image: "/api/placeholder/300/300",
    rating: 4.4,
    reviews: 54,
    specs: {
      type: "True Wireless",
      noise: "Smart ANC",
      battery: "10h + 40h case",
      connectivity: "Bluetooth 5.3"
    }
  }
]

export default function AudioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-3 mb-4">
            <Headphones className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Audio</h1>
          </div>
          <p className="text-lg opacity-90 max-w-3xl">
            Premium audio equipment including headphones, earbuds, and speakers. Experience 
            crystal-clear sound quality with industry-leading noise cancellation and immersive audio.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
                <option>Newest First</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Showing {audioProducts.length} products</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audioProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  )
}
