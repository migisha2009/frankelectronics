"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Heart, 
  ShoppingCart, 
  Search, 
  Filter, 
  Package, 
  Trash2,
  Eye,
  Share2
} from "lucide-react"

export default function WishlistPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock wishlist data
  const wishlistItems = [
    {
      id: "1",
      name: "Samsung Galaxy S24 Ultra",
      price: "RWF 1,100,000",
      originalPrice: "RWF 1,200,000",
      image: "/api/placeholder-phone.jpg",
      category: "smartphones",
      inStock: true,
      discount: 8,
      addedDate: "2024-01-15"
    },
    {
      id: "2",
      name: "Sony WH-1000XM4 Wireless Headphones",
      price: "RWF 350,000",
      originalPrice: "RWF 350,000",
      image: "/api/placeholder-headphones.jpg",
      category: "audio",
      inStock: true,
      discount: 0,
      addedDate: "2024-01-10"
    },
    {
      id: "3",
      name: "MacBook Air M2",
      price: "RWF 2,800,000",
      originalPrice: "RWF 3,200,000",
      image: "/api/placeholder-laptop.jpg",
      category: "laptops",
      inStock: false,
      discount: 13,
      addedDate: "2024-01-08"
    },
    {
      id: "4",
      name: "iPad Pro 12.9",
      price: "RWF 950,000",
      originalPrice: "RWF 950,000",
      image: "/api/placeholder-tablet.jpg",
      category: "tablets",
      inStock: true,
      discount: 0,
      addedDate: "2024-01-05"
    },
    {
      id: "5",
      name: "Apple Watch Series 9",
      price: "RWF 450,000",
      originalPrice: "RWF 500,000",
      image: "/api/placeholder-watch.jpg",
      category: "accessories",
      inStock: true,
      discount: 10,
      addedDate: "2024-01-12"
    }
  ]

  const categories = [
    { id: "all", name: "All Items" },
    { id: "smartphones", name: "Smartphones" },
    { id: "laptops", name: "Laptops" },
    { id: "tablets", name: "Tablets" },
    { id: "audio", name: "Audio" },
    { id: "accessories", name: "Accessories" }
  ]

  const filteredItems = wishlistItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalPrice = filteredItems.reduce((sum, item) => sum + parseFloat(item.price.replace(/[^\d.]/g, "")), 0)
  const totalSavings = filteredItems.reduce((sum, item) => sum + (parseFloat(item.originalPrice.replace(/[^\d.]/g, "")) - parseFloat(item.price.replace(/[^\d.]/g, ""))), 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            My Wishlist
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Save your favorite items and get notified when they go on sale.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search wishlist items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-14 h-14 w-full text-lg bg-white/90 backdrop-blur-sm border-2 border-gray-200/60 focus:border-orange-400 rounded-xl"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-14 px-6 bg-white/90 backdrop-blur-sm border-2 border-gray-200/60 focus:border-orange-400 rounded-xl text-gray-900"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{filteredItems.length}</h3>
              <p className="text-gray-600">Total Items</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600">
                RWF {totalPrice.toLocaleString()}
              </div>
              <p className="text-gray-600">Total Value</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600">
                RWF {totalSavings.toLocaleString()}
              </div>
              <p className="text-gray-600">Total Savings</p>
            </CardContent>
          </Card>
        </div>

        {/* Wishlist Items */}
        <div className="space-y-6">
          {filteredItems.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent>
                <div className="max-w-md mx-auto space-y-6">
                  <Heart className="w-16 h-16 mx-auto text-gray-400" />
                  <h2 className="text-2xl font-semibold text-gray-900">Your Wishlist is Empty</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Start adding items to your wishlist to keep track of products you love.
                  </p>
                  <Button className="h-12 px-8">
                    <Package className="w-5 h-5 mr-3" />
                    Browse Products
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            filteredItems.map((item) => (
              <Card key={item.id} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Product Image */}
                    <div className="md:col-span-1">
                      <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {!item.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <p className="text-white font-semibold">Out of Stock</p>
                          </div>
                        )}
                        {item.discount > 0 && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            -{item.discount}%
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="md:col-span-2 space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </h3>
                        <Badge className="bg-gray-100 text-gray-800 border-gray-200">
                          {item.category}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div>
                          {item.discount > 0 ? (
                            <div className="space-y-1">
                              <p className="text-sm text-gray-500 line-through">
                                {item.originalPrice}
                              </p>
                              <p className="text-2xl font-bold text-orange-600">
                                {item.price}
                              </p>
                            </div>
                          ) : (
                            <p className="text-2xl font-bold text-gray-900">
                              {item.price}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Added {item.addedDate}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        Premium quality product with excellent features and performance.
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="md:col-span-1 space-y-3">
                      <Button className="w-full h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transform hover:-translate-y-0.5 transition-all duration-200">
                        <ShoppingCart className="w-5 h-5 mr-3" />
                        Add to Cart
                      </Button>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 h-10">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 h-10 text-red-600 hover:text-red-700 hover:border-red-300">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remove
                        </Button>
                      </div>

                      <Button variant="outline" size="sm" className="w-full h-10">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Share Wishlist */}
        {filteredItems.length > 0 && (
          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-indigo-50/50 p-12 rounded-2xl border border-blue-200/60">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Share Your Wishlist</h2>
            <p className="text-blue-800 leading-relaxed mb-8 max-w-2xl mx-auto">
              Let your friends know about the products you're saving for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200">
                <Share2 className="w-5 h-5 mr-3" />
                Share via Email
              </Button>
              <Button variant="outline" className="h-12 px-8 rounded-xl hover:bg-blue-50 transform hover:-translate-y-0.5 transition-all duration-200">
                <Share2 className="w-5 h-5 mr-3" />
                Copy Link
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
