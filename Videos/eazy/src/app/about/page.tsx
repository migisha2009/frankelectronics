import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Award, 
  MapPin, 
  Mail, 
  Phone, 
  Target,
  CheckCircle,
  TrendingUp
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            About Frank
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Your trusted electronics partner in Kigali, Rwanda since 2020
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-blue-800">Years in Business</CardTitle>
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">4+</div>
              <div className="text-sm text-gray-600">Trusted by thousands</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-green-800">Products Sold</CardTitle>
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-600">Quality electronics</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50/50 border-b border-purple-200/60">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-purple-800">Happy Customers</CardTitle>
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Satisfaction rate</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50/50 border-b border-orange-200/60">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-orange-800">Growth Rate</CardTitle>
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">25%</div>
              <div className="text-sm text-gray-600">Year over year</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Our Story */}
          <div className="lg:col-span-2">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200/60">
                <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                  <Award className="w-8 h-8 mr-3 text-orange-500" />
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Frank Electronics began in 2020 with a simple mission: to provide Kigali residents with access to quality electronics at competitive prices. What started as a small shop in the heart of the city has grown into a trusted name in technology retail.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our founder, John Mwangi, recognized a gap in the local market for authentic electronics and accessories. With years of experience in the tech industry and a deep understanding of customer needs, he set out to create a different kind of electronics store.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-xl border border-blue-200/60">
                  <h3 className="font-semibold text-blue-900 mb-3">Our Mission</h3>
                  <p className="text-blue-800 leading-relaxed">
                    To bridge the digital divide by providing cutting-edge technology solutions that empower our community to thrive in the digital age.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50/50 p-6 rounded-xl border border-orange-200/60">
                  <h3 className="font-semibold text-orange-900 mb-3">Our Vision</h3>
                  <p className="text-orange-800 leading-relaxed">
                    To become Rwanda's leading electronics retailer, known for quality products, exceptional service, and community impact.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div>
            <Card className="hover:shadow-xl transition-all duration-300 h-full">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50/50 border-b border-orange-200/60">
                <CardTitle className="text-2xl font-semibold text-gray-900">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-orange-600">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Quality First</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Every product we sell is carefully selected and tested to ensure it meets our high standards for quality and reliability.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Customer Service</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We're committed to providing exceptional customer service with knowledgeable staff who can help you find exactly what you need.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-green-600">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Community Focus</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We actively support local initiatives and believe in giving back to the community that has supported us.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <Card className="hover:shadow-xl transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50/50 border-b border-purple-200/60">
            <CardTitle className="text-2xl font-semibold text-gray-900 text-center">Meet Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">JM</span>
                </div>
                <h3 className="font-semibold text-gray-900">John Mwangi</h3>
                <p className="text-gray-600">Founder & CEO</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  15+ years in electronics retail with a passion for bringing cutting-edge technology to Rwanda.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">SK</span>
                </div>
                <h3 className="font-semibold text-gray-900">Sarah Kimani</h3>
                <p className="text-gray-600">Operations Manager</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Ensuring smooth operations and exceptional customer service experiences every day.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">PN</span>
                </div>
                <h3 className="font-semibold text-gray-900">Peter Niyonzima</h3>
                <p className="text-gray-600">Technical Support Lead</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Our tech expert who ensures every customer leaves with the perfect solution for their needs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-orange-50 to-amber-50/50 p-12 rounded-2xl border border-orange-200/60">
          <h2 className="text-2xl font-semibold text-orange-900 mb-4">
            Ready to Experience Quality Electronics?
          </h2>
          <p className="text-orange-800 leading-relaxed mb-8 max-w-2xl mx-auto">
            Visit our showroom in Kigali or shop online to discover our curated selection of premium electronics and accessories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-12 px-8 text-base font-semibold">
              Visit Our Store
            </Button>
            <Button variant="outline" className="h-12 px-8 text-base font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
