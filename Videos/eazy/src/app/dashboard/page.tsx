"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  User, 
  Package, 
  ShoppingCart, 
  MapPin, 
  CreditCard,
  Heart,
  Clock,
  TrendingUp,
  Settings,
  LogOut
} from "lucide-react"

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data - in real app would come from API
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/api/placeholder-avatar.jpg",
    memberSince: "2023-01-15"
  }

  const stats = [
    {
      title: "Total Orders",
      value: "24",
      icon: ShoppingCart,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Wishlist Items",
      value: "8",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      title: "Saved Addresses",
      value: "3",
      icon: MapPin,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Payment Methods",
      value: "2",
      icon: CreditCard,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ]

  const recentOrders = [
    {
      id: "EZ12345",
      date: "2024-01-15",
      status: "delivered",
      total: "RWF 450,000",
      items: [
        { name: "iPhone 15 Pro", quantity: 1, price: "RWF 1,200,000" },
        { name: "AirPods Pro", quantity: 1, price: "RWF 150,000" }
      ]
    },
    {
      id: "EZ12344",
      date: "2024-01-10",
      status: "in_transit",
      total: "RWF 280,000",
      items: [
        { name: "MacBook Air M2", quantity: 1, price: "RWF 2,800,000" }
      ]
    }
  ]

  const wishlistItems = [
    {
      id: "1",
      name: "Samsung Galaxy S24 Ultra",
      price: "RWF 1,100,000",
      image: "/api/placeholder-phone.jpg",
      inStock: true
    },
    {
      id: "2",
      name: "Sony WH-1000XM4",
      price: "RWF 350,000",
      image: "/api/placeholder-headphones.jpg",
      inStock: true
    },
    {
      id: "3",
      name: "iPad Pro 12.9",
      price: "RWF 950,000",
      image: "/api/placeholder-tablet.jpg",
      inStock: false
    }
  ]

  const addresses = [
    {
      id: "1",
      type: "Home",
      name: "John Doe",
      address: "Kicukiro Street, Building 123",
      city: "Kigali",
      isDefault: true
    },
    {
      id: "2",
      type: "Office",
      name: "John Doe",
      address: "KG 543 Ave, Floor 2",
      city: "Kigali",
      isDefault: false
    }
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "orders", label: "Orders", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "settings", label: "Settings", icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-8">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              My Dashboard
            </h1>
            <p className="text-gray-600">Welcome back, {user.name}!</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">JD</span>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-xs text-gray-500">Member since {user.memberSince}</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 border-b border-gray-200/60">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
                activeTab === tab.id
                  ? "text-orange-600 border-orange-600 bg-orange-50"
                  : "text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Orders */}
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                    <Package className="w-8 h-8 mr-3 text-blue-600" />
                    Recent Orders
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="border border-gray-200/60 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <p className="font-semibold text-gray-900">Order #{order.id}</p>
                            <p className="text-sm text-gray-600">{order.date}</p>
                          </div>
                          <Badge className={
                            order.status === "delivered" ? "bg-green-100 text-green-800 border-green-200" :
                            order.status === "in_transit" ? "bg-blue-100 text-blue-800 border-blue-200" :
                            "bg-yellow-100 text-yellow-800 border-yellow-200"
                          }>
                            {order.status === "delivered" ? "Delivered" :
                             order.status === "in_transit" ? "In Transit" : "Processing"}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="font-bold text-gray-900">{order.total}</p>
                          <Link href={`/track/${order.id}`}>
                            <Button variant="outline" size="sm">Track</Button>
                          </Link>
                        </div>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{item.name} × {item.quantity}</span>
                              <span>{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Link href="/orders">
                      <Button className="h-12 px-8">View All Orders</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                    <TrendingUp className="w-8 h-8 mr-3 text-green-600" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Link href="/wishlist" className="block p-4 border border-gray-200/60 rounded-xl hover:bg-orange-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Heart className="w-5 h-5 text-red-500" />
                        <div>
                          <p className="font-medium text-gray-900">View Wishlist</p>
                          <p className="text-sm text-gray-600">{wishlistItems.length} items</p>
                        </div>
                      </div>
                    </Link>
                    
                    <Link href="/track" className="block p-4 border border-gray-200/60 rounded-xl hover:bg-blue-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Package className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="font-medium text-gray-900">Track Order</p>
                          <p className="text-sm text-gray-600">Real-time tracking</p>
                        </div>
                      </div>
                    </Link>
                    
                    <Link href="/settings" className="block p-4 border border-gray-200/60 rounded-xl hover:bg-purple-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Settings className="w-5 h-5 text-purple-500" />
                        <div>
                          <p className="font-medium text-gray-900">Account Settings</p>
                          <p className="text-sm text-gray-600">Manage preferences</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "orders" && (
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
                <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                  <ShoppingCart className="w-8 h-8 mr-3 text-blue-600" />
                  Order History
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200/60 rounded-xl p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="font-semibold text-gray-900">Order #{order.id}</p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <Badge className={
                          order.status === "delivered" ? "bg-green-100 text-green-800 border-green-200" :
                          order.status === "in_transit" ? "bg-blue-100 text-blue-800 border-blue-200" :
                          "bg-yellow-100 text-yellow-800 border-yellow-200"
                        }>
                          {order.status === "delivered" ? "Delivered" :
                           order.status === "in_transit" ? "In Transit" : "Processing"}
                        </Badge>
                      </div>
                      <div className="space-y-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{item.name} × {item.quantity}</span>
                            <span>{item.price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-gray-200/30">
                        <p className="font-bold text-lg text-gray-900">{order.total}</p>
                        <div className="space-x-2">
                          <Link href={`/track/${order.id}`}>
                            <Button variant="outline" size="sm">Track</Button>
                          </Link>
                          <Button size="sm">Reorder</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "wishlist" && (
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50/50 border-b border-red-200/60">
                <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                  <Heart className="w-8 h-8 mr-3 text-red-600" />
                  My Wishlist
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="border border-gray-200/60 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="aspect-square bg-gray-100 relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        {!item.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <p className="text-white font-semibold">Out of Stock</p>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-lg font-bold text-orange-600 mb-3">{item.price}</p>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">Add to Cart</Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:border-red-300">
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "addresses" && (
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
                <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                  <MapPin className="w-8 h-8 mr-3 text-green-600" />
                  Saved Addresses
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {addresses.map((address) => (
                    <div key={address.id} className="border border-gray-200/60 rounded-xl p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="font-semibold text-gray-900">{address.type}</p>
                          <p className="text-sm text-gray-600">{address.name}</p>
                        </div>
                        {address.isDefault && (
                          <Badge className="bg-green-100 text-green-800 border-green-200">Default</Badge>
                        )}
                      </div>
                      <p className="text-gray-700">{address.address}</p>
                      <p className="text-gray-600">{address.city}</p>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:border-red-300">
                          Delete
                        </Button>
                        {!address.isDefault && (
                          <Button size="sm">Set as Default</Button>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="mt-6 text-center">
                    <Button className="h-12 px-8">
                      <MapPin className="w-5 h-5 mr-3" />
                      Add New Address
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "settings" && (
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50/50 border-b border-purple-200/60">
                <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                  <Settings className="w-8 h-8 mr-3 text-purple-600" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-base font-semibold text-gray-800">Full Name</label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="h-12 w-full rounded-xl border border-gray-200/60 bg-white/90 backdrop-blur-sm px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:border-orange-400 focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-gray-300 hover:bg-white shadow-sm hover:shadow-md"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-base font-semibold text-gray-800">Email</label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="h-12 w-full rounded-xl border border-gray-200/60 bg-white/90 backdrop-blur-sm px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:border-orange-400 focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-gray-300 hover:bg-white shadow-sm hover:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-base font-semibold text-gray-800">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+250 78 999 999"
                      className="h-12 w-full rounded-xl border border-gray-200/60 bg-white/90 backdrop-blur-sm px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:border-orange-400 focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-gray-300 hover:bg-white shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div className="flex gap-4 mt-8">
                    <Button className="h-12 px-8">Save Changes</Button>
                    <Button variant="outline" className="h-12 px-12 text-red-600 hover:text-red-700 hover:border-red-300">
                      <LogOut className="w-5 h-5 mr-3" />
                      Logout
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
