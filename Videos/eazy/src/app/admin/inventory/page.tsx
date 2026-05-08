import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Package, AlertTriangle, TrendingUp, Edit, Plus } from "lucide-react"

export default async function AdminInventory() {
  const products = await prisma.product.findMany({
    include: {
      category: true
    },
    orderBy: { stock: "asc" }
  })

  const lowStockProducts = products.filter(product => product.stock < 10)
  const outOfStockProducts = products.filter(product => product.stock === 0)
  const totalStockValue = products.reduce((sum, product) => sum + (parseFloat(product.price) * product.stock), 0)

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Inventory</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">Monitor stock levels, track inventory value, and manage product availability across your store.</p>
        </div>
        <Link href="/admin/products/add">
          <Button className="h-12 px-8 text-base font-semibold">
            <Plus className="w-5 h-5 mr-3" />
            Add Product
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-blue-800">Total Products</CardTitle>
              <Package className="w-5 h-5 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{products.length}</div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-green-800">Total Stock Value</CardTitle>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">${totalStockValue.toFixed(2)}</div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50/50 border-b border-yellow-200/60">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-yellow-800">Low Stock Items</CardTitle>
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{lowStockProducts.length}</div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50/50 border-b border-red-200/60">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-red-800">Out of Stock</CardTitle>
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{outOfStockProducts.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input 
            placeholder="Search inventory..." 
            className="pl-12 h-12 bg-white/90 backdrop-blur-sm"
          />
        </div>
        <Select>
          <SelectTrigger className="w-48 h-12 bg-white/90 backdrop-blur-sm">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-48 h-12 bg-white/90 backdrop-blur-sm">
            <SelectValue placeholder="Stock Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="instock">In Stock</SelectItem>
            <SelectItem value="lowstock">Low Stock</SelectItem>
            <SelectItem value="outofstock">Out of Stock</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200/60">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                    {product.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{product.category?.name}</p>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={`/admin/products/${product.id}/edit`}>
                    <Button variant="outline" size="sm" className="h-9 w-9">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{product.stock}</p>
                    <p className="text-sm text-gray-600">units in stock</p>
                  </div>
                  <Badge className={
                    product.stock === 0 ? "bg-red-100 text-red-800 border-red-200" :
                    product.stock < 10 ? "bg-yellow-100 text-yellow-800 border-yellow-200" :
                    "bg-green-100 text-green-800 border-green-200"
                  }>
                    {product.stock === 0 ? "Out of Stock" :
                     product.stock < 10 ? "Low Stock" : "In Stock"}
                  </Badge>
                </div>
                
                <div className="h-24 bg-gray-100 rounded-xl flex items-center justify-center">
                  {product.images.length > 0 ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <Package className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="text-gray-600">
                    <span className="font-medium">SKU:</span> {product.sku || "N/A"}
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-orange-600">${product.price}</p>
                    <p className="text-xs text-gray-500">Value: ${(parseFloat(product.price) * product.stock).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto space-y-6">
            <Package className="w-16 h-16 mx-auto text-gray-400" />
            <h2 className="text-2xl font-semibold text-gray-900">No products in inventory</h2>
            <p className="text-gray-600 leading-relaxed">Add your first product to start tracking inventory levels and stock value.</p>
            <Link href="/admin/products/add">
              <Button className="h-12 px-8 text-base font-semibold">
                <Plus className="w-5 h-5 mr-3" />
                Add First Product
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
