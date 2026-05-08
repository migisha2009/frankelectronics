import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Eye, 
  Database, 
  Lock, 
  UserCheck,
  AlertTriangle,
  CheckCircle
} from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Your privacy matters. Learn how we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-xl border border-blue-200/60 mb-8">
          <div className="flex items-center justify-center space-x-3 text-blue-800">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-medium">Last Updated: January 1, 2024</span>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {/* Information Collection */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <Database className="w-8 h-8 mr-3 text-green-600" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 p-6 rounded-xl border border-green-200/60">
                  <h3 className="font-semibold text-green-900 mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Name, email address, phone number, and billing information</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Shipping and delivery addresses</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Payment information (processed securely through payment gateways)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-xl border border-blue-200/60">
                  <h3 className="font-semibold text-blue-900 mb-3">Technical Information</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>IP address and browser type for security purposes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Device information and operating system</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Cookies and similar tracking technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50/50 border-b border-orange-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <Eye className="w-8 h-8 mr-3 text-orange-600" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50/50 p-6 rounded-xl border border-orange-200/60">
                  <h3 className="font-semibold text-orange-900 mb-3">Primary Uses</h3>
                  <ul className="space-y-2 text-orange-800">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Process orders and deliveries</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Provide customer support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Send order updates and notifications</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50/50 p-6 rounded-xl border border-purple-200/60">
                  <h3 className="font-semibold text-purple-900 mb-3">Secondary Uses</h3>
                  <ul className="space-y-2 text-purple-800">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Improve our products and services</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Personalize your shopping experience</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Send relevant marketing communications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50/50 border-b border-red-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <Lock className="w-8 h-8 mr-3 text-red-600" />
                Data Security & Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-50 to-rose-50/50 p-6 rounded-xl border border-red-200/60">
                  <h3 className="font-semibold text-red-900 mb-3">Security Measures</h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>SSL encryption for all data transmission</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>PCI DSS compliant payment processing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Regular security audits and updates</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-slate-50/50 p-6 rounded-xl border border-gray-200/60">
                  <h3 className="font-semibold text-gray-900 mb-3">Data Retention</h3>
                  <p className="text-gray-800 leading-relaxed">
                    We retain your personal information only as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Personal data is automatically deleted after 7 years of inactivity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <UserCheck className="w-8 h-8 mr-3 text-blue-600" />
                Your Rights & Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-xl border border-blue-200/60">
                  <h3 className="font-semibold text-blue-900 mb-3">Access Rights</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>View and update personal information</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Delete account and associated data</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Opt-out of marketing communications</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 p-6 rounded-xl border border-green-200/60">
                  <h3 className="font-semibold text-green-900 mb-3">Privacy Controls</h3>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Cookie preferences and settings</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Marketing email preferences</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Data portability requests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact for Privacy */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-50 to-indigo-50/50 p-12 rounded-2xl border border-purple-200/60">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4 flex items-center justify-center">
            <Shield className="w-8 h-8 mr-3 text-purple-600" />
            Privacy Questions?
          </h2>
          <p className="text-purple-800 leading-relaxed mb-8 max-w-2xl mx-auto">
            If you have questions about this privacy policy or how we handle your data, please contact our privacy team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white p-4 rounded-xl border-2 border-purple-300">
              <p className="font-semibold text-purple-900">Email:</p>
              <p className="text-purple-800">privacy@frankelectronics.com</p>
            </div>
            <div className="bg-white p-4 rounded-xl border-2 border-purple-300">
              <p className="font-semibold text-purple-900">Phone:</p>
              <p className="text-purple-800">+250 78 777 777</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
