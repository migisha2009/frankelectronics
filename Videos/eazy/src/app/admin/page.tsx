import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  DollarSign,
  AlertCircle
} from "lucide-react"

export default async function AdminDashboard() {
  const [
    totalProducts,
    totalOrders,
    totalUsers,
    pendingOrders,
    totalRevenue,
    lowStockProducts
  ] = await Promise.all([
    prisma.product.count(),
    prisma.order.count(),
    prisma.user.count(),
    prisma.order.count({ where: { status: "PENDING" } }),
    prisma.order.aggregate({
      _sum: { totalPrice: true },
      where: { paymentStatus: "PAID" }
    }),
    prisma.product.count({
      where: { stock: { lt: 10 } }
    })
  ])

  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: Package,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Total Orders",
      value: totalOrders,
      icon: ShoppingCart,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Total Users",
      value: totalUsers,
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Pending Orders",
      value: pendingOrders,
      icon: AlertCircle,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "Total Revenue",
      value: `$${totalRevenue._sum.totalPrice || 0}`,
      icon: DollarSign,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      title: "Low Stock Items",
      value: lowStockProducts,
      icon: TrendingUp,
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ]

  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: { fullName: true, email: true }
      }
    }
  })

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome to Frank Admin Dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order: any) => (
                <div key={order.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium text-gray-900">#{order.orderNumber}</p>
                    <p className="text-sm text-gray-600">{order.user.fullName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">${order.totalPrice}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === "PENDING" ? "bg-yellow-100 text-yellow-800" :
                      order.status === "PROCESSING" ? "bg-blue-100 text-blue-800" :
                      order.status === "SHIPPED" ? "bg-purple-100 text-purple-800" :
                      order.status === "DELIVERED" ? "bg-green-100 text-green-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <a
                href="/admin/products/add"
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900">Add New Product</h3>
                <p className="text-sm text-gray-600">Create a new product listing</p>
              </a>
              <a
                href="/admin/orders"
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900">Manage Orders</h3>
                <p className="text-sm text-gray-600">View and update order status</p>
              </a>
              <a
                href="/admin/analytics"
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900">View Analytics</h3>
                <p className="text-sm text-gray-600">Sales and revenue insights</p>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
