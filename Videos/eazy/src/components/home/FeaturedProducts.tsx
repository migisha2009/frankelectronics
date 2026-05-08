import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Heart, ShoppingCart } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  discountPrice?: number
  images: string[]
  rating: number
  reviewCount: number
  category: {
    name: string
  }
}

interface FeaturedProductsProps {
  products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium electronics at competitive prices
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 rounded-t-lg overflow-hidden">
                      {product.images.length > 0 ? (
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-gray-400">
                            <ShoppingCart className="w-12 h-12" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-orange-50 transition-colors">
                      <Heart className="w-4 h-4 text-gray-600 hover:text-orange-500" />
                    </button>
                    
                    {product.discountPrice && (
                      <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Sale
                      </div>
                    )}
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="text-xs text-orange-500 font-medium uppercase tracking-wide">
                      {product.category.name}
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({product.reviewCount})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xl font-bold text-orange-500">
                          ${product.discountPrice || product.price}
                        </div>
                        {product.discountPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            ${product.price}
                          </div>
                        )}
                      </div>
                      
                      <Link href={`/products/${product.id}`}>
                        <Button
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600 text-white"
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">
              No featured products available
            </div>
            <Link href="/shop">
              <Button className="bg-orange-500 hover:bg-orange-600">
                View All Products
              </Button>
            </Link>
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/shop">
            <Button 
              variant="outline" 
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
