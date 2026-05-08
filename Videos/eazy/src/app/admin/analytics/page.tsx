import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Package,
  Eye,
  MousePointer,
  Calendar
} from "lucide-react"

export default async function AdminAnalytics() {
  const [
    totalRevenue,
    totalOrders,
    totalUsers,
    totalProducts,
    avgOrderValue,
    conversionRate
  ] = await Promise.all([
    prisma.order.aggregate({
      _sum: { totalPrice: true },
      where: { paymentStatus: "PAID" }
    }),
    prisma.order.count(),
    prisma.user.count(),
    prisma.product.count(),
    prisma.order.aggregate({
      _avg: { totalPrice: true }
    }),
    // Mock conversion rate - in real app would calculate from sessions/orders
    Promise.resolve(3.2)
  ])

  const recentOrders = await prisma.order.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: { fullName: true }
      }
    }
  })

  const topProducts = await prisma.product.findMany({
    take: 5,
    include: {
      orderItems: true
    }
  })

  const monthlyRevenue = await prisma.order.aggregate({
    _sum: { totalPrice: true },
    where: {
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 30))
      },
      paymentStatus: "PAID"
    }
  })

  const stats = [
    {
      title: "Total Revenue",
      value: `$${totalRevenue._sum.totalPrice?.toFixed(2) || "0"}`,
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Total Orders",
      value: totalOrders.toString(),
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Active Users",
      value: totalUsers.toString(),
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Conversion Rate",
      value: `${conversionRate}%`,
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Analytics</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">Comprehensive insights into your e-commerce performance, sales trends, and customer behavior.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div className="space-y-1">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className={`flex items-center text-sm font-medium ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}>
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span>{stat.change}</span>
                  </div>
                </div>
              </div>
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Chart Placeholder */}
        <Card className="lg:col-span-2 hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
            <CardTitle className="text-xl font-semibold text-gray-900">Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gradient-to-br from-green-100 to-emerald-100/50 rounded-xl flex items-center justify-center border-2 border-dashed border-green-300/60">
              <div className="text-center space-y-4">
                <DollarSign className="w-16 h-16 mx-auto text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">${monthlyRevenue._sum.totalPrice?.toFixed(2) || "0"}</h3>
                <p className="text-sm text-gray-600">Last 30 days</p>
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-medium">+12.5%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50/50 border-b border-orange-200/60">
            <CardTitle className="text-xl font-semibold text-gray-900">Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product: any, index) => (
                <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 line-clamp-1">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.orderItems.reduce((sum: number, item: any) => sum + item.quantity, 0)} sold</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-orange-600">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders Table */}
      <Card className="hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold text-gray-900">Recent Orders</CardTitle>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Last 10 orders</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200/60">
                  <th className="text-left p-3 font-semibold text-gray-900">Order #</th>
                  <th className="text-left p-3 font-semibold text-gray-900">Customer</th>
                  <th className="text-left p-3 font-semibold text-gray-900">Date</th>
                  <th className="text-right p-3 font-semibold text-gray-900">Total</th>
                  <th className="text-center p-3 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order: any) => (
                  <tr key={order.id} className="border-b border-gray-200/30 hover:bg-gray-50 transition-colors">
                    <td className="p-3">
                      <span className="font-medium text-gray-900">#{order.orderNumber}</span>
                    </td>
                    <td className="p-3">
                      <span className="text-gray-700">{order.user.fullName}</span>
                    </td>
                    <td className="p-3">
                      <span className="text-gray-700">{new Date(order.createdAt).toLocaleDateString()}</span>
                    </td>
                    <td className="p-3 text-right">
                      <span className="font-bold text-orange-600">${order.totalPrice}</span>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "PENDING" ? "bg-yellow-100 text-yellow-800" :
                        order.status === "PROCESSING" ? "bg-blue-100 text-blue-800" :
                        order.status === "SHIPPED" ? "bg-purple-100 text-purple-800" :
                        order.status === "DELIVERED" ? "bg-green-100 text-green-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <Card className="hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Page Views</h3>
            <p className="text-2xl font-bold text-gray-900">45.2K</p>
            <p className="text-sm text-green-600">+18.2%</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MousePointer className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Click Rate</h3>
            <p className="text-2xl font-bold text-gray-900">3.2%</p>
            <p className="text-sm text-green-600">+0.8%</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Avg Order</h3>
            <p className="text-2xl font-bold text-gray-900">${avgOrderValue._avg.totalPrice?.toFixed(2) || "0"}</p>
            <p className="text-sm text-red-600">-2.1%</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Products</h3>
            <p className="text-2xl font-bold text-gray-900">{totalProducts}</p>
            <p className="text-sm text-green-600">+5.3%</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
