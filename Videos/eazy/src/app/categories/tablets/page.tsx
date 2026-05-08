import ProductCard from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { Tablet } from "lucide-react"

const tablets = [
  {
    id: 1,
    name: "iPad Pro 12.9\"",
    brand: "Apple",
    price: 1599000,
    originalPrice: 1899000,
    image: "/api/placeholder/300/300",
    rating: 4.9,
    reviews: 78,
    badge: "Premium",
    specs: {
      display: "12.9\" Liquid Retina XDR",
      processor: "M2",
      storage: "256GB",
      connectivity: "Wi-Fi + 5G"
    }
  },
  {
    id: 2,
    name: "Galaxy Tab S9 Ultra",
    brand: "Samsung",
    price: 1399000,
    originalPrice: null,
    image: "/api/placeholder/300/300",
    rating: 4.8,
    reviews: 65,
    specs: {
      display: "14.6\" Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2",
      storage: "512GB",
      connectivity: "Wi-Fi + 5G"
    }
  },
  {
    id: 3,
    name: "Surface Pro 9",
    brand: "Microsoft",
    price: 1199000,
    originalPrice: 1399000,
    image: "/api/placeholder/300/300",
    rating: 4.6,
    reviews: 92,
    badge: "2-in-1",
    specs: {
      display: "13\" PixelSense",
      processor: "Intel Core i5",
      storage: "256GB SSD",
      connectivity: "Wi-Fi"
    }
  },
  {
    id: 4,
    name: "Xiaomi Pad 6",
    brand: "Xiaomi",
    price: 599000,
    originalPrice: null,
    image: "/api/placeholder/300/300",
    rating: 4.5,
    reviews: 48,
    specs: {
      display: "11\" IPS LCD",
      processor: "Snapdragon 870",
      storage: "128GB",
      connectivity: "Wi-Fi"
    }
  },
  {
    id: 5,
    name: "Lenovo Tab P12 Pro",
    brand: "Lenovo",
    price: 799000,
    originalPrice: 899000,
    image: "/api/placeholder/300/300",
    rating: 4.4,
    reviews: 34,
    badge: "Sale",
    specs: {
      display: "12.6\" AMOLED",
      processor: "MediaTek Kompanio 1300T",
      storage: "256GB",
      connectivity: "Wi-Fi"
    }
  },
  {
    id: 6,
    name: "Amazon Fire HD 10",
    brand: "Amazon",
    price: 299000,
    originalPrice: null,
    image: "/api/placeholder/300/300",
    rating: 4.2,
    reviews: 156,
    badge: "Budget",
    specs: {
      display: "10.1\" Full HD",
      processor: "MediaTek MT8183",
      storage: "32GB",
      connectivity: "Wi-Fi"
    }
  }
]

export default function TabletsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-3 mb-4">
            <Tablet className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Tablets</h1>
          </div>
          <p className="text-lg opacity-90 max-w-3xl">
            Versatile tablets perfect for entertainment, work, and creativity. From premium 
            iPad Pro to budget-friendly options, find the perfect tablet for your needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
                <option>Newest First</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Showing {tablets.length} products</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tablets.map((tablet) => (
            <ProductCard key={tablet.id} product={tablet} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  )
}
