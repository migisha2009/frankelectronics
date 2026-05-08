import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProductForm from "@/components/admin/ProductForm"

export default async function AddProduct() {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" }
  })

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <Link href="/admin/products" className="inline-flex items-center text-gray-600 hover:text-orange-600 mb-6 transition-colors duration-200 group">
          <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Products</span>
        </Link>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Add New Product</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">Create a new product listing for your electronics store with detailed information, pricing, and images.</p>
        </div>
      </div>

      <Card className="shadow-2xl shadow-gray-300/10 border-gray-200/60 bg-white/90 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-orange-50/50 to-amber-50/50 border-b border-gray-200/60">
          <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Product Information</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm categories={categories} />
        </CardContent>
      </Card>
    </div>
  )
}
