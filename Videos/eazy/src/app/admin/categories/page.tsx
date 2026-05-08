import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Plus, Package } from "lucide-react"

export default async function AdminCategories() {
  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: {
          products: true
        }
      }
    },
    orderBy: { name: "asc" }
  })

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Categories</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">Manage product categories to organize your inventory and improve customer browsing experience.</p>
        </div>
        <Link href="/admin/categories/add">
          <Button className="h-12 px-8 text-base font-semibold">
            <Plus className="w-5 h-5 mr-3" />
            Add Category
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category: any) => (
          <Card key={category.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200/60">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors flex items-center">
                    <Package className="w-5 h-5 mr-3 text-orange-500" />
                    {category.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">
                    {category.description || "No description provided"}
                  </p>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={`/admin/categories/${category.id}/edit`}>
                    <Button variant="outline" size="sm" className="h-9 w-9">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="h-9 w-9 text-red-600 hover:text-red-700 hover:border-red-300">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Products:</span>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
                      {category._count.products}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Status:</span>
                    <Badge className={category.isFeatured ? "bg-green-100 text-green-800 border-green-200" : "bg-gray-100 text-gray-800 border-gray-200"}>
                      {category.isFeatured ? "Featured" : "Standard"}
                    </Badge>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  {category.imageUrl && (
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-gray-200/60 shadow-md">
                      <img
                        src={category.imageUrl}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {categories.length === 0 && (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto space-y-6">
            <Package className="w-16 h-16 mx-auto text-gray-400" />
            <h2 className="text-2xl font-semibold text-gray-900">No categories found</h2>
            <p className="text-gray-600 leading-relaxed">Create your first category to start organizing your products.</p>
            <Link href="/admin/categories/add">
              <Button className="h-12 px-8 text-base font-semibold">
                <Plus className="w-5 h-5 mr-3" />
                Create First Category
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
