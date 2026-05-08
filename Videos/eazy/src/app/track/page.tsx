"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Package,
  Truck,
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  RefreshCw,
} from "lucide-react"

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [searchResult, setSearchResult] = useState<any>(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleTrackOrder = async () => {
    if (!orderNumber.trim()) return

    setIsSearching(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (orderNumber.toLowerCase() === "ez12345") {
      setSearchResult({
        orderNumber: "EZ12345",
        status: "in_transit",
        estimatedDelivery: "2026-01-18",
        currentLocation: "Kigali Distribution Center",

        trackingHistory: [
          {
            date: "2026-01-15 14:30",
            location: "Kigali Warehouse",
            status: "Order Placed",
            icon: Package,
          },
          {
            date: "2026-01-15 16:00",
            location: "Kigali Warehouse",
            status: "Order Processed",
            icon: CheckCircle,
          },
          {
            date: "2026-01-16 09:00",
            location: "Kigali Distribution Center",
            status: "In Transit",
            icon: Truck,
          },
        ],

        items: [
          {
            name: "iPhone 15 Pro 256GB",
            quantity: 1,
            price: "RWF 1,200,000",
          },
          {
            name: "AirPods Pro",
            quantity: 1,
            price: "RWF 150,000",
          },
        ],

        customerInfo: {
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "+250 78 999 999",
          address: "Kicukiro Street, Kigali, Rwanda",
        },
      })
    } else {
      setSearchResult({
        error: "Order not found. Please check your order number and try again.",
      })
    }

    setIsSearching(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700 border-green-200"

      case "in_transit":
        return "bg-orange-100 text-orange-700 border-orange-200"

      case "processing":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"

      case "pending":
        return "bg-gray-100 text-gray-700 border-gray-200"

      default:
        return "bg-red-100 text-red-700 border-red-200"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered":
        return "Delivered"

      case "in_transit":
        return "In Transit"

      case "processing":
        return "Processing"

      case "pending":
        return "Pending"

      default:
        return "Not Found"
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF4E8]">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#0f172a] mb-4">
            Track Your Order
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your order number to view real-time delivery updates.
          </p>
        </div>

        {/* Search Card */}
        <Card className="max-w-2xl mx-auto mb-12 shadow-lg border-0 rounded-2xl">
          <CardContent className="p-8">
            <div className="space-y-5">

              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                <Input
                  placeholder="Enter order number (EZ12345)"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleTrackOrder()
                  }
                  className="pl-12 h-14 rounded-xl border-gray-200 focus-visible:ring-[#EF7B2A]"
                />
              </div>

              <Button
                onClick={handleTrackOrder}
                disabled={isSearching || !orderNumber.trim()}
                className="w-full h-14 bg-[#EF7B2A] hover:bg-orange-600 text-white rounded-xl font-semibold"
              >
                {isSearching ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                    Tracking...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Search className="w-5 h-5 mr-2" />
                    Track Order
                  </div>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {searchResult && (
          <div className="space-y-8">

            {/* Error State */}
            {searchResult.error ? (
              <Card className="max-w-2xl mx-auto rounded-2xl shadow-lg border-0">
                <CardContent className="p-8 text-center">

                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-5" />

                  <h2 className="text-2xl font-bold text-red-700 mb-3">
                    Order Not Found
                  </h2>

                  <p className="text-gray-600 mb-6">
                    {searchResult.error}
                  </p>

                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchResult(null)
                      setOrderNumber("")
                    }}
                    className="rounded-xl"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <>

                {/* Top Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                  {/* Order Status */}
                  <Card className="rounded-2xl shadow-md border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center text-[#0f172a]">
                        <Package className="w-6 h-6 mr-2 text-[#EF7B2A]" />
                        Order Status
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">

                      <Badge className={getStatusColor(searchResult.status)}>
                        {getStatusText(searchResult.status)}
                      </Badge>

                      <div className="space-y-3 text-gray-700">

                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-[#EF7B2A]" />
                          {searchResult.estimatedDelivery}
                        </div>

                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-[#EF7B2A]" />
                          {searchResult.currentLocation}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Order Details */}
                  <Card className="rounded-2xl shadow-md border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center text-[#0f172a]">
                        <Package className="w-6 h-6 mr-2 text-[#EF7B2A]" />
                        Order Details
                      </CardTitle>
                    </CardHeader>

                    <CardContent>

                      <h3 className="font-semibold mb-4">
                        Order #{searchResult.orderNumber}
                      </h3>

                      <div className="space-y-4">

                        {searchResult.items.map((item: any, index: number) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-[#FFF4E8] rounded-xl"
                          >
                            <div>
                              <p className="font-medium text-[#0f172a]">
                                {item.name}
                              </p>

                              <p className="text-sm text-gray-500">
                                Qty: {item.quantity}
                              </p>
                            </div>

                            <p className="font-bold text-[#EF7B2A]">
                              {item.price}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Delivery Info */}
                  <Card className="rounded-2xl shadow-md border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center text-[#0f172a]">
                        <MapPin className="w-6 h-6 mr-2 text-[#EF7B2A]" />
                        Delivery Address
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">

                      <div>
                        <p className="font-semibold text-[#0f172a]">
                          {searchResult.customerInfo.name}
                        </p>

                        <p className="text-gray-600">
                          {searchResult.customerInfo.email}
                        </p>

                        <p className="text-gray-600">
                          {searchResult.customerInfo.phone}
                        </p>
                      </div>

                      <div className="bg-[#FFF4E8] p-4 rounded-xl">
                        <p className="text-gray-700">
                          {searchResult.customerInfo.address}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Tracking History */}
                <Card className="rounded-2xl shadow-md border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#0f172a]">
                      <Clock className="w-6 h-6 mr-2 text-[#EF7B2A]" />
                      Tracking History
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-5">

                    {searchResult.trackingHistory.map(
                      (event: any, index: number) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-4 bg-[#FFF4E8] rounded-xl"
                        >
                          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                            <event.icon className="w-5 h-5 text-[#EF7B2A]" />
                          </div>

                          <div>
                            <p className="font-medium text-[#0f172a]">
                              {event.status}
                            </p>

                            <p className="text-gray-600">
                              {event.location}
                            </p>

                            <p className="text-sm text-gray-500">
                              {event.date}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        )}

        {/* Help Section */}
        <div className="mt-14 bg-white rounded-3xl shadow-lg p-10 text-center">

          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
            Need Help With Your Order?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact our support team if you have questions about your delivery or order status.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button className="bg-[#EF7B2A] hover:bg-orange-600 text-white rounded-xl px-8 h-12">
              Contact Support
            </Button>

            <Button
              variant="outline"
              className="rounded-xl px-8 h-12 border-gray-300 hover:border-[#EF7B2A]"
            >
              View All Orders
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}