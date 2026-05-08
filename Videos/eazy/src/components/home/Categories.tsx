import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Laptop, Tablet, Headphones, Gamepad2, Package } from "lucide-react"

interface Category {
  id: string
  name: string
  slug: string
  imageUrl?: string
  description?: string
}

interface CategoriesProps {
  categories: Category[]
}

const categoryIcons = {
  smartphones: Smartphone,
  laptops: Laptop,
  tablets: Tablet,
  audio: Headphones,
  gaming: Gamepad2,
  accessories: Package,
}

export default function Categories({ categories }: CategoriesProps) {
  const getCategoryIcon = (categoryName: string) => {
    const slug = categoryName.toLowerCase().replace(/\s+/g, "")
    return categoryIcons[slug as keyof typeof categoryIcons] || Package
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our wide range of electronics categories to find exactly what you need
          </p>
        </div>

        {categories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = getCategoryIcon(category.name)
              return (
                <Link key={category.id} href={`/categories/${category.slug}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg overflow-hidden cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative h-48 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
                        {category.imageUrl ? (
                          <Image
                            src={category.imageUrl}
                            alt={category.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Icon className="w-16 h-16 text-orange-400 opacity-50" />
                          </div>
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <div className="p-6 bg-white">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {category.name}
                        </h3>
                        {category.description && (
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {category.description}
                          </p>
                        )}
                        
                        <div className="mt-4 flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                          <span>Shop Now</span>
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
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">
              No categories available
            </div>
            <Link href="/shop">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Browse Products
              </button>
            </Link>
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/categories">
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              View All Categories
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
