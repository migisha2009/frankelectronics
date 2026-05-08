import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Truck, 
  Package, 
  Clock, 
  Shield, 
  RefreshCw, 
  MapPin,
  CreditCard,
  CheckCircle,
  AlertCircle
} from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Shipping & Returns
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about delivery times, costs, and our return policy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Shipping Information */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <Truck className="w-8 h-8 mr-3 text-blue-600" />
                Shipping Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-xl border border-blue-200/60">
                  <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Delivery Areas
                  </h3>
                  <div className="space-y-3 text-blue-800">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Kigali City</span>
                      <Badge className="bg-green-100 text-green-800 border-green-200">1-2 days</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Major Cities</span>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">2-3 days</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Rural Areas</span>
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">3-5 days</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">International</span>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">7-14 days</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50/50 p-6 rounded-xl border border-orange-200/60">
                  <h3 className="font-semibold text-orange-900 mb-4 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-orange-600" />
                    Shipping Costs
                  </h3>
                  <div className="space-y-3 text-orange-800">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Orders under RWF 50,000</span>
                      <span className="font-bold">RWF 2,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Orders RWF 50,000 - 100,000</span>
                      <span className="font-bold">RWF 3,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Orders over RWF 100,000</span>
                      <Badge className="bg-green-100 text-green-800 border-green-200">FREE</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Return Policy */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <RefreshCw className="w-8 h-8 mr-3 text-green-600" />
                Return Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 p-6 rounded-xl border border-green-200/60">
                  <h3 className="font-semibold text-green-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-green-600" />
                    Return Period
                  </h3>
                  <div className="space-y-3 text-green-800">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">7-Day Return Window</p>
                        <p className="text-sm">For unused items in original packaging</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">30-Day Exchange</p>
                        <p className="text-sm">For defective items with manufacturer warranty</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">No Restocking Fees</p>
                        <p className="text-sm">On eligible returns within 7 days</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-rose-50/50 p-6 rounded-xl border border-red-200/60">
                  <h3 className="font-semibold text-red-900 mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
                    Non-Returnable Items
                  </h3>
                  <div className="space-y-3 text-red-800">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Custom Orders</p>
                        <p className="text-sm">Made specifically for you</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Software & Digital Downloads</p>
                        <p className="text-sm">Once downloaded or activated</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Personal Items</p>
                        <p className="text-sm">For hygiene and safety reasons</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Steps */}
        <Card className="hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50/50 border-b border-purple-200/60">
            <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
              <Package className="w-8 h-8 mr-3 text-purple-600" />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Place Order</h3>
                <p className="text-gray-700 leading-relaxed">
                  Browse our catalog and add items to cart. Complete checkout with your preferred payment method.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Order Processing</h3>
                <p className="text-gray-700 leading-relaxed">
                  We confirm your order and prepare items for shipping. You'll receive order confirmation via email.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Shipping</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your order is shipped using our trusted delivery partners. Track your package every step of the way.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Receive your order at your doorstep. Our delivery team ensures safe and timely delivery.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50/50 border-b border-yellow-200/60">
              <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-yellow-600" />
                Package Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  All orders are automatically insured up to RWF 500,000 against loss or damage during transit.
                </p>
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50/50 p-4 rounded-xl border border-yellow-200/60">
                  <h4 className="font-semibold text-yellow-900 mb-2">Coverage Includes:</h4>
                  <ul className="space-y-2 text-yellow-800">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span>Theft during delivery</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span>Accidental damage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span>Lost packages</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50/50 border-b border-red-200/60">
              <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                <Truck className="w-6 h-6 mr-2 text-red-600" />
                Special Delivery Options
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 text-gray-700">
                <div className="bg-gradient-to-r from-red-50 to-rose-50/50 p-4 rounded-xl border border-red-200/60">
                  <h4 className="font-semibold text-red-900 mb-3">Express Delivery</h4>
                  <p className="text-red-800 leading-relaxed mb-3">
                    Need it urgently? Get your order within 24 hours in Kigali.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-red-900">Cost:</span>
                    <span className="font-bold text-red-900">RWF 5,000 extra</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-4 rounded-xl border border-blue-200/60">
                  <h4 className="font-semibold text-blue-900 mb-3">Pickup Option</h4>
                  <p className="text-blue-800 leading-relaxed mb-3">
                    Skip delivery fees by picking up from our Kigali store.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-blue-900">Cost:</span>
                    <Badge className="bg-green-100 text-green-800 border-green-200">FREE</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
