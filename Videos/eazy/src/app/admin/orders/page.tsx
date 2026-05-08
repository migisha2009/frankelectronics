import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Eye, Package, User, Calendar } from "lucide-react"

export default async function AdminOrders() {
  const orders = await prisma.order.findMany({
    include: {
      user: {
        select: { fullName: true, email: true }
      },
      orderItems: {
        include: {
          product: {
            select: { name: true, images: true }
          }
        }
      }
    },
    orderBy: { createdAt: "desc" },
    take: 50
  })

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Orders</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">Manage customer orders, track fulfillment status, and handle shipping logistics.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search orders..." 
              className="pl-12 w-64 h-12 bg-white/90 backdrop-blur-sm"
            />
          </div>
          <Select>
            <SelectTrigger className="w-40 h-12 bg-white/90 backdrop-blur-sm">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {orders.map((order: any) => (
          <Card key={order.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200/60">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      #{order.orderNumber}
                    </CardTitle>
                    <Badge className={
                      order.status === "PENDING" ? "bg-yellow-100 text-yellow-800 border-yellow-200" :
                      order.status === "PROCESSING" ? "bg-blue-100 text-blue-800 border-blue-200" :
                      order.status === "SHIPPED" ? "bg-purple-100 text-purple-800 border-purple-200" :
                      order.status === "DELIVERED" ? "bg-green-100 text-green-800 border-green-200" :
                      "bg-red-100 text-red-800 border-red-200"
                    }>
                      {order.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(order.createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {order.user.fullName}
                    </div>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <div className="text-2xl font-bold text-orange-600">
                    ${order.totalPrice}
                  </div>
                  <Badge className={
                    order.paymentStatus === "PAID" ? "bg-green-100 text-green-800 border-green-200" :
                    order.paymentStatus === "PENDING" ? "bg-yellow-100 text-yellow-800 border-yellow-200" :
                    "bg-red-100 text-red-800 border-red-200"
                  }>
                    {order.paymentStatus}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Package className="w-5 h-5 text-orange-500" />
                      Order Items
                    </h3>
                    <div className="space-y-3">
                      {order.orderItems.map((item: any, index: number) => (
                        <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-200/60">
                          <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-200/60 flex-shrink-0">
                            {item.product.images.length > 0 ? (
                              <img
                                src={item.product.images[0]}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <Package className="w-6 h-6 text-gray-400" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900">{item.product.name}</p>
                            <p className="text-sm text-gray-600">Qty: {item.quantity} × ${item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Delivery Information</h3>
                    <div className="space-y-2 text-sm text-gray-600 bg-gradient-to-r from-blue-50 to-indigo-50/50 p-4 rounded-xl border border-blue-200/60">
                      <p>{order.deliveryAddress}</p>
                      {order.trackingNumber && (
                        <p className="text-orange-600 font-medium">
                          Tracking: {order.trackingNumber}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/admin/orders/${order.id}`}>
                      <Button variant="outline" size="sm" className="h-10">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-10 text-green-600 hover:text-green-700 hover:border-green-300"
                    >
                      Mark as Delivered
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {orders.length === 0 && (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto space-y-6">
            <Package className="w-16 h-16 mx-auto text-gray-400" />
            <h2 className="text-2xl font-semibold text-gray-900">No orders found</h2>
            <p className="text-gray-600 leading-relaxed">When customers place orders, they will appear here for management.</p>
          </div>
        </div>
      )}
    </div>
  )
}
