import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Users, Mail, Shield, Calendar, MoreHorizontal } from "lucide-react"

export default async function AdminUsers() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      fullName: true,
      role: true,
      createdAt: true,
      _count: {
        select: {
          orders: true
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Users</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">Manage user accounts, roles, and permissions for your e-commerce platform.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search users..." 
              className="pl-12 w-64 h-12 bg-white/90 backdrop-blur-sm"
            />
          </div>
          <Select>
            <SelectTrigger className="w-40 h-12 bg-white/90 backdrop-blur-sm">
              <SelectValue placeholder="All Roles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {users.map((user: any) => (
          <Card key={user.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200/60">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                      {user.fullName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {user.fullName}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" size="sm" className="h-9 w-9">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Badge className={
                    user.role === "ADMIN" ? "bg-purple-100 text-purple-800 border-purple-200" : "bg-blue-100 text-blue-800 border-blue-200"
                  }>
                    <Shield className="w-3 h-3 mr-1" />
                    {user.role}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    Joined {new Date(user.createdAt).toLocaleDateString()}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Total Orders</div>
                    <div className="text-xl font-bold text-gray-900">
                      {user._count.orders}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-gray-200/60">
                  <Link href={`/admin/users/${user.id}/edit`}>
                    <Button variant="outline" size="sm" className="flex-1 h-10">
                      Edit User
                    </Button>
                  </Link>
                  {user.role !== "ADMIN" && (
                    <Button variant="outline" size="sm" className="flex-1 h-10 text-red-600 hover:text-red-700 hover:border-red-300">
                      Manage Access
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {users.length === 0 && (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto space-y-6">
            <Users className="w-16 h-16 mx-auto text-gray-400" />
            <h2 className="text-2xl font-semibold text-gray-900">No users found</h2>
            <p className="text-gray-600 leading-relaxed">New user registrations will appear here for management.</p>
          </div>
        </div>
      )}
    </div>
  )
}
