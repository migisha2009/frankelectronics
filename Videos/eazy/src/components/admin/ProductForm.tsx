"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X, Plus } from "lucide-react"

interface ProductFormProps {
  categories: { id: string; name: string }[]
  product?: {
    id?: string
    name?: string
    description?: string
    price?: string
    discountPrice?: string | null
    categoryId?: string
    stock?: string
    sku?: string
    isFeatured?: boolean
    isActive?: boolean
    specifications?: Record<string, any>
    images?: string[]
  }
}

export default function ProductForm({ categories, product }: ProductFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState<string[]>(product?.images || [])
  const [formData, setFormData] = useState<{
    name: string
    description: string
    price: string
    discountPrice: string
    categoryId: string
    stock: string
    sku: string
    isFeatured: boolean
    isActive: boolean
    specifications: Record<string, any>
  }>({
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || "",
    discountPrice: product?.discountPrice || "",
    categoryId: product?.categoryId || "",
    stock: product?.stock || "",
    sku: product?.sku || "",
    isFeatured: product?.isFeatured || false,
    isActive: product?.isActive !== undefined ? product.isActive : true,
    specifications: product?.specifications || {}
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleImageUpload = (url: string) => {
    setImages(prev => [...prev, url])
  }

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const payload = {
        ...formData,
        price: parseFloat(formData.price),
        discountPrice: formData.discountPrice ? parseFloat(formData.discountPrice) : null,
        stock: parseInt(formData.stock),
        images
      }

      const url = product ? `/api/products/${product.id}` : "/api/products"
      const method = product ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        router.push("/admin/products")
      } else {
        throw new Error("Failed to save product")
      }
    } catch (error) {
      console.error("Error saving product:", error)
      alert("Failed to save product. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-base font-semibold text-gray-800 mb-2 block">Product Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter product name"
              required
              className="h-12"
            />
          </div>

          <div>
            <Label htmlFor="sku" className="text-base font-semibold text-gray-800 mb-2 block">SKU</Label>
            <Input
              id="sku"
              value={formData.sku}
              onChange={(e) => handleInputChange("sku", e.target.value)}
              placeholder="Enter SKU (optional)"
              className="h-12"
            />
          </div>

          <div>
            <Label htmlFor="category" className="text-base font-semibold text-gray-800 mb-2 block">Category *</Label>
            <Select value={formData.categoryId} onValueChange={(value: string) => handleInputChange("categoryId", value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="price" className="text-base font-semibold text-gray-800 mb-2 block">Price *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                placeholder="0.00"
                required
                className="h-12"
              />
            </div>
            <div>
              <Label htmlFor="discountPrice" className="text-base font-semibold text-gray-800 mb-2 block">Discount Price</Label>
              <Input
                id="discountPrice"
                type="number"
                step="0.01"
                value={formData.discountPrice}
                onChange={(e) => handleInputChange("discountPrice", e.target.value)}
                placeholder="0.00"
                className="h-12"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="stock" className="text-base font-semibold text-gray-800 mb-2 block">Stock Quantity *</Label>
            <Input
              id="stock"
              type="number"
              value={formData.stock}
              onChange={(e) => handleInputChange("stock", e.target.value)}
              placeholder="0"
              required
              className="h-12"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Label htmlFor="description" className="text-base font-semibold text-gray-800 mb-2 block">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Enter product description"
              rows={5}
              required
              className="min-h-[120px]"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-2xl border border-gray-200/60">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="isFeatured"
                checked={formData.isFeatured}
                onCheckedChange={(checked: boolean) => handleInputChange("isFeatured", checked)}
                className="h-5 w-5"
              />
              <Label htmlFor="isFeatured" className="text-base font-medium text-gray-700 cursor-pointer">Featured Product</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox
                id="isActive"
                checked={formData.isActive}
                onCheckedChange={(checked: boolean) => handleInputChange("isActive", checked)}
                className="h-5 w-5"
              />
              <Label htmlFor="isActive" className="text-base font-medium text-gray-700 cursor-pointer">Active</Label>
            </div>
          </div>
        </div>
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200/60">
          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Product Images</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square rounded-2xl overflow-hidden border-2 border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <img
                      src={image}
                      alt={`Product image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 text-white p-2 rounded-full shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transform hover:scale-110 transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              <div className="aspect-square rounded-2xl border-2 border-dashed border-gray-300/60 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl flex items-center justify-center hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100/50 transition-all duration-300 group cursor-pointer">
                <button
                  type="button"
                  className="text-gray-400 hover:text-orange-500 transform hover:scale-110 transition-all duration-200"
                  onClick={() => {
                    // This would integrate with Cloudinary upload
                    const url = prompt("Enter image URL:")
                    if (url) handleImageUpload(url)
                  }}
                >
                  <Upload className="w-8 h-8" />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed bg-gradient-to-r from-blue-50 to-indigo-50/50 p-4 rounded-xl border border-blue-200/60">
              <span className="font-medium text-gray-700">💡 Tip:</span> Upload product images. First image will be the main display image. Supported formats: JPG, PNG, WebP.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row justify-end gap-4 pt-8 border-t border-gray-200/60">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          className="h-12 px-8"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="h-12 px-8 text-base font-semibold"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
              Saving...
            </div>
          ) : product ? (
            "Update Product"
          ) : (
            "Create Product"
          )}
        </Button>
      </div>
    </form>
  )
}
