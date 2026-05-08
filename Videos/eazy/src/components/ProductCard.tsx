import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart, Monitor, HardDrive, Camera, Battery } from "lucide-react"

interface ProductCardProps {
  product: {
    id: number
    name: string
    brand: string
    price: number
    originalPrice?: number | null
    image?: string
    rating: number
    reviews: number
    badge?: string
    specs: {
      display?: string
      storage?: string
      camera?: string
      battery?: string
      processor?: string
      ram?: string
      type?: string
      noise?: string
      connectivity?: string
      screen?: string
    }
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
      <CardContent className="p-0">
        {/* Product Image and Badge */}
        <div className="relative">
          <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="w-24 h-24 text-gray-400">
              {product.specs.display ? <Monitor className="w-full h-full" /> : 
               product.specs.type ? <Camera className="w-full h-full" /> :
               <Monitor className="w-full h-full" />}
            </div>
          </div>
          {product.badge && (
            <Badge className="absolute top-3 left-3 bg-orange-500 text-white">
              {product.badge}
            </Badge>
          )}
          <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="mb-2">
            <span className="text-sm text-gray-500">{product.brand}</span>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
              {product.name}
            </h3>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-600">
            {product.specs.display && <div>📱 {product.specs.display}</div>}
            {product.specs.screen && <div>📱 {product.specs.screen}</div>}
            {product.specs.storage && <div>💾 {product.specs.storage}</div>}
            {product.specs.camera && <div>📸 {product.specs.camera}</div>}
            {product.specs.battery && <div>🔋 {product.specs.battery}</div>}
            {product.specs.processor && <div>⚡ {product.specs.processor}</div>}
            {product.specs.ram && <div>🧠 {product.specs.ram}</div>}
            {product.specs.type && <div>🎧 {product.specs.type}</div>}
            {product.specs.noise && <div>🔇 {product.specs.noise}</div>}
            {product.specs.connectivity && <div>📡 {product.specs.connectivity}</div>}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                RWF {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  RWF {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" className="px-3">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
