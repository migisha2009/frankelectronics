import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Laptop, Tablet, Headphones } from "lucide-react"

const categories = [
  {
    name: "Smartphones",
    slug: "smartphones",
    icon: Smartphone,
    description: "Latest smartphones with cutting-edge technology and premium features",
    productCount: 24
  },
  {
    name: "Laptops", 
    slug: "laptops",
    icon: Laptop,
    description: "High-performance laptops for work, gaming, and everyday use",
    productCount: 18
  },
  {
    name: "Tablets",
    slug: "tablets", 
    icon: Tablet,
    description: "Versatile tablets for entertainment, work, and creativity",
    productCount: 12
  },
  {
    name: "Audio",
    slug: "audio",
    icon: Headphones,
    description: "Premium audio equipment including headphones, speakers, and more",
    productCount: 15
  }
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of electronics organized by category
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.slug} href={`/categories/${category.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg overflow-hidden cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-colors">
                        <Icon className="w-8 h-8 text-orange-600" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {category.description}
                        </p>
                        <div className="text-sm text-orange-500 font-medium">
                          {category.productCount} Products
                        </div>
                      </div>
                      
                      <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                        <span>Browse</span>
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Featured Categories Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Smartphones</h3>
              <p className="mb-6 opacity-90">
                Discover the latest smartphones with advanced cameras, powerful processors, and stunning displays.
              </p>
              <Link href="/categories/smartphones">
                <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Shop Smartphones
                </button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Laptops</h3>
              <p className="mb-6 opacity-90">
                High-performance laptops designed for productivity, gaming, and creative work.
              </p>
              <Link href="/categories/laptops">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Shop Laptops
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
