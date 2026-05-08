import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Gavel, 
  Users,
  Package,
  CreditCard
} from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            By using Frank Electronics, you agree to these terms and conditions.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-xl border border-blue-200/60 mb-8">
          <div className="flex items-center justify-center space-x-3 text-blue-800">
            <FileText className="w-5 h-5" />
            <span className="font-medium">Last Updated: January 1, 2024</span>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <CheckCircle className="w-8 h-8 mr-3 text-green-600" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  By accessing and using Frank Electronics' website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
                <p>
                  These terms apply to all visitors, users, and others who access or use our services. Your access to and use of our services is conditioned on your acceptance of and compliance with these terms.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Products and Services */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50/50 border-b border-orange-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <Package className="w-8 h-8 mr-3 text-orange-600" />
                Products and Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50/50 p-6 rounded-xl border border-orange-200/60">
                  <h3 className="font-semibold text-orange-900 mb-3">Product Information</h3>
                  <p className="text-orange-800 leading-relaxed">
                    We strive to provide accurate product descriptions, specifications, and pricing. However, we do not warrant that product descriptions or other content are accurate, complete, reliable, current, or error-free.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-xl border border-blue-200/60">
                  <h3 className="font-semibold text-blue-900 mb-3">Availability</h3>
                  <p className="text-blue-800 leading-relaxed">
                    Product availability is subject to change without notice. We reserve the right to discontinue any products at any time without liability to you.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50/50 p-6 rounded-xl border border-purple-200/60">
                  <h3 className="font-semibold text-purple-900 mb-3">Pricing</h3>
                  <p className="text-purple-800 leading-relaxed">
                    Prices are subject to change without notice. All prices are listed in Rwandan Francs (RWF) and include applicable taxes unless otherwise stated.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50/50 border-b border-purple-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <Users className="w-8 h-8 mr-3 text-purple-600" />
                User Accounts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50/50 p-6 rounded-xl border border-purple-200/60">
                  <h3 className="font-semibold text-purple-900 mb-3">Account Creation</h3>
                  <p className="text-purple-800 leading-relaxed">
                    To access certain features of our services, you must create an account. You agree to provide accurate, current, and complete information as prompted by our registration form.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-rose-50/50 p-6 rounded-xl border border-red-200/60">
                  <h3 className="font-semibold text-red-900 mb-3">Account Security</h3>
                  <p className="text-red-800 leading-relaxed">
                    You are responsible for safeguarding your account credentials. You agree to notify us immediately of any unauthorized use of your account.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-slate-50/50 p-6 rounded-xl border border-gray-200/60">
                  <h3 className="font-semibold text-gray-900 mb-3">Account Termination</h3>
                  <p className="text-gray-800 leading-relaxed">
                    We may terminate or suspend your account at any time, with or without cause, with or without notice, effective immediately.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <CreditCard className="w-8 h-8 mr-3 text-blue-600" />
                Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-xl border border-blue-200/60">
                  <h3 className="font-semibold text-blue-900 mb-3">Payment Methods</h3>
                  <p className="text-blue-800 leading-relaxed">
                    We accept various payment methods including credit/debit cards, mobile money (MTN MoMo, Airtel Money), and cash on delivery. All payments are processed securely.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 p-6 rounded-xl border border-green-200/60">
                  <h3 className="font-semibold text-green-900 mb-3">Payment Processing</h3>
                  <p className="text-green-800 leading-relaxed">
                    By providing payment information, you represent that you are authorized to use the payment method and that you authorize us to charge the specified amount.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-amber-50/50 p-6 rounded-xl border border-yellow-200/60">
                  <h3 className="font-semibold text-yellow-900 mb-3">Refund Policy</h3>
                  <p className="text-yellow-800 leading-relaxed">
                    Refunds are processed according to our return policy. Refunds may take 5-7 business days to process and appear in your account.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-green-600" />
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The content, features, and functionality of our services are owned by Frank Electronics and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not modify, reproduce, distribute, create derivative works, publicly display, or publicly perform any part of our services without our prior written consent.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50/50 border-b border-red-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <AlertTriangle className="w-8 h-8 mr-3 text-red-600" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-red-50 to-rose-50/50 p-6 rounded-xl border border-red-200/60">
                <div className="space-y-4 text-red-800">
                  <p className="leading-relaxed">
                    In no event shall Frank Electronics be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                  </p>
                  <p className="leading-relaxed">
                    Our total liability to you for all claims arising from the use of our services shall not exceed the amount you paid to us for the services in question.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50/50 border-b border-gray-200/60">
              <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                <Gavel className="w-8 h-8 mr-3 text-gray-600" />
                Governing Law
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-gray-50 to-slate-50/50 p-6 rounded-xl border border-gray-200/60">
                <div className="space-y-4 text-gray-800">
                  <p className="leading-relaxed">
                    These Terms of Service shall be governed by and construed in accordance with the laws of Rwanda, without regard to its conflict of law provisions.
                  </p>
                  <p className="leading-relaxed">
                    Any dispute arising from these terms shall be resolved through good faith negotiation and, if necessary, through Rwandan courts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact for Questions */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-indigo-50/50 p-12 rounded-2xl border border-blue-200/60">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center justify-center">
            <FileText className="w-8 h-8 mr-3 text-blue-600" />
            Questions About These Terms?
          </h2>
          <p className="text-blue-800 leading-relaxed mb-8 max-w-2xl mx-auto">
            If you have any questions about these Terms of Service, please contact our legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white p-4 rounded-xl border-2 border-blue-300">
              <p className="font-semibold text-blue-900">Email:</p>
              <p className="text-blue-800">legal@frankelectronics.com</p>
            </div>
            <div className="bg-white p-4 rounded-xl border-2 border-blue-300">
              <p className="font-semibold text-blue-900">Phone:</p>
              <p className="text-blue-800">+250 78 777 777</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
