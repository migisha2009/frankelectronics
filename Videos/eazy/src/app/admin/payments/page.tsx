import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  CreditCard, 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  Search,
  Filter,
  Download
} from "lucide-react"

export default async function AdminPayments() {
  const payments = await prisma.payment.findMany({
    include: {
      order: {
        select: {
          orderNumber: true,
          user: {
            select: { fullName: true }
          }
        }
      }
    },
    orderBy: { createdAt: "desc" },
    take: 50
  })

  const paymentStats = await prisma.payment.groupBy({
    by: ['paymentMethod', 'status'],
    _count: true,
    _sum: { amount: true }
  })

  const totalRevenue = await prisma.payment.aggregate({
    _sum: { amount: true },
    where: { status: "PAID" }
  })

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Payments</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">Track payment transactions, manage refunds, and monitor revenue streams across different payment methods.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search payments..." 
              className="pl-12 w-64 h-12 bg-white/90 backdrop-blur-sm"
            />
          </div>
          <Select>
            <SelectTrigger className="w-40 h-12 bg-white/90 backdrop-blur-sm">
              <SelectValue placeholder="All Methods" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Methods</SelectItem>
              <SelectItem value="stripe">Stripe</SelectItem>
              <SelectItem value="mobile_money">Mobile Money</SelectItem>
              <SelectItem value="cash_on_delivery">Cash on Delivery</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-green-800">Total Revenue</CardTitle>
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              ${totalRevenue._sum.amount?.toFixed(2) || "0"}
            </div>
            <div className="flex items-center text-sm text-green-600 mt-2">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+18.5% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-blue-800">Successful Payments</CardTitle>
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              {paymentStats.find(stat => stat.status === "PAID")?._count || 0}
            </div>
            <div className="flex items-center text-sm text-blue-600 mt-2">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+12.3% conversion rate</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50/50 border-b border-yellow-200/60">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-yellow-800">Pending Payments</CardTitle>
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              {paymentStats.find(stat => stat.status === "PENDING")?._count || 0}
            </div>
            <div className="text-sm text-gray-600 mt-2">
              Awaiting processing
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50/50 border-b border-red-200/60">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-red-800">Failed Payments</CardTitle>
              <Filter className="w-6 h-6 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              {paymentStats.find(stat => stat.status === "FAILED")?._count || 0}
            </div>
            <div className="text-sm text-red-600 mt-2">
              -2.1% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Methods Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50/50 border-b border-purple-200/60">
            <CardTitle className="text-xl font-semibold text-gray-900">Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentStats.map((stat: any) => (
                <div key={stat.paymentMethod} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 capitalize">
                        {stat.paymentMethod.replace('_', ' ')}
                      </p>
                      <p className="text-sm text-gray-600">{stat._count} transactions</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">
                      ${(stat._sum.amount || 0).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50/50 border-b border-orange-200/60">
            <CardTitle className="text-xl font-semibold text-gray-900">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full p-4 bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-xl border border-blue-200/60 hover:from-blue-100 hover:to-indigo-100/50 transition-all duration-300 text-left group">
                <Download className="w-5 h-5 text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-blue-800 transition-colors">Export Payments</p>
                  <p className="text-sm text-gray-600">Download CSV report</p>
                </div>
              </button>
              <button className="w-full p-4 bg-gradient-to-r from-green-50 to-emerald-50/50 rounded-xl border border-green-200/60 hover:from-green-100 hover:to-emerald-100/50 transition-all duration-300 text-left group">
                <CreditCard className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-green-800 transition-colors">Process Refunds</p>
                  <p className="text-sm text-gray-600">Manage payment returns</p>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Payments Table */}
      <Card className="hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200/60">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold text-gray-900">Recent Transactions</CardTitle>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Last 50 payments</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200/60">
                  <th className="text-left p-3 font-semibold text-gray-900">Transaction ID</th>
                  <th className="text-left p-3 font-semibold text-gray-900">Order #</th>
                  <th className="text-left p-3 font-semibold text-gray-900">Customer</th>
                  <th className="text-left p-3 font-semibold text-gray-900">Method</th>
                  <th className="text-left p-3 font-semibold text-gray-900">Amount</th>
                  <th className="text-left p-3 font-semibold text-gray-900">Status</th>
                  <th className="text-left p-3 font-semibold text-gray-900">Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment: any) => (
                  <tr key={payment.id} className="border-b border-gray-200/30 hover:bg-gray-50 transition-colors">
                    <td className="p-3">
                      <span className="font-mono text-sm text-gray-700">{payment.transactionId || payment.id.slice(0, 8)}</span>
                    </td>
                    <td className="p-3">
                      <span className="font-medium text-gray-900">#{payment.order.orderNumber}</span>
                    </td>
                    <td className="p-3">
                      <span className="text-gray-700">{payment.order.user.fullName}</span>
                    </td>
                    <td className="p-3">
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                        {payment.paymentMethod.replace('_', ' ')}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <span className="font-bold text-orange-600">${payment.amount}</span>
                    </td>
                    <td className="p-3">
                      <Badge className={
                        payment.status === "PAID" ? "bg-green-100 text-green-800 border-green-200" :
                        payment.status === "PENDING" ? "bg-yellow-100 text-yellow-800 border-yellow-200" :
                        "bg-red-100 text-red-800 border-red-200"
                      }>
                        {payment.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <span className="text-gray-700">{new Date(payment.createdAt).toLocaleDateString()}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
