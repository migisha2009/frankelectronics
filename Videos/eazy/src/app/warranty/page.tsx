import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Package, 
  RefreshCw,
  FileText,
  Phone,
  Mail,
  Calendar
} from "lucide-react"

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Product Warranty
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Comprehensive warranty protection for your peace of mind.
          </p>
        </div>

        {/* Warranty Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-green-600" />
                Warranty Coverage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 p-6 rounded-xl border border-green-200/60">
                  <h3 className="font-semibold text-green-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    What's Covered
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Manufacturing defects and faulty materials</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Normal wear and tear</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Component failures</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-rose-50/50 p-6 rounded-xl border border-red-200/60">
                  <h3 className="font-semibold text-red-900 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                    Not Covered
                  </h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Accidental damage or misuse</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Unauthorized repairs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Software issues</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <Clock className="w-8 h-8 mr-3 text-blue-600" />
                Warranty Period
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-xl border border-blue-200/60">
                  <h3 className="font-semibold text-blue-900 mb-3">Standard Warranty</h3>
                  <div className="space-y-2 text-blue-800">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Duration:</span>
                      <span className="font-bold">12 months from purchase date</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Coverage:</span>
                      <span className="font-bold">100% parts and labor</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50/50 p-6 rounded-xl border border-orange-200/60">
                  <h3 className="font-semibold text-orange-900 mb-3">Extended Warranty</h3>
                  <div className="space-y-2 text-orange-800">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Duration:</span>
                      <span className="font-bold">24 months from purchase date</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Coverage:</span>
                      <span className="font-bold">100% parts and labor</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Cost:</span>
                      <span className="font-bold">RWF 50,000 (10% of product price)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Warranty Process */}
        <Card className="hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50/50 border-b border-purple-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <Package className="w-8 h-8 mr-3 text-purple-600" />
                Warranty Claim Process
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Support</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Reach out to our support team with your order details
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Provide Documentation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Submit proof of purchase and photos of the issue
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Inspection & Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our technical team will evaluate the issue
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Resolution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Repair, replacement, or refund based on assessment
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50/50 border-b border-orange-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <Phone className="w-8 h-8 mr-3 text-orange-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Warranty Hotline</p>
                    <p className="text-lg">+250 78 777 777</p>
                    <p className="text-sm text-gray-600">Available 24/7 for warranty claims</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email Support</p>
                    <p className="text-lg">warranty@frankelectronics.com</p>
                    <p className="text-sm text-gray-600">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">In-Store Service</p>
                    <p className="text-lg">Visit our Kigali store for immediate assistance</p>
                    <p className="text-sm text-gray-600">Kicukiro Street, Kigali, Rwanda</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <FileText className="w-8 h-8 mr-3 text-blue-600" />
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-8">
              <div className="space-y-4 text-gray-700">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-4 rounded-xl border border-blue-200/60">
                  <h3 className="font-semibold text-blue-900 mb-3">For Warranty Claims</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Original purchase receipt or invoice</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Product serial number</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Photos or videos of the issue</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Proof of purchase date</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-indigo-50/50 p-12 rounded-2xl border border-blue-200/60">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Need to Make a Warranty Claim?</h2>
          <p className="text-blue-800 leading-relaxed mb-8 max-w-2xl mx-auto">
            Our warranty team is ready to help. Contact us today to start your claim process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 font-semibold">
              <Phone className="w-5 h-5 mr-3" />
              Call Warranty Support
            </Button>
            <Button variant="outline" className="h-12 px-8 rounded-xl hover:bg-blue-50 transform hover:-translate-y-0.5 transition-all duration-200 font-semibold">
              <FileText className="w-5 h-5 mr-3" />
              Submit Claim Online
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
