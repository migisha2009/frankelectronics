"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp,
  Package,
  CreditCard,
  Truck,
  Shield,
  Clock
} from "lucide-react"

const faqData = [
  {
    category: "General",
    icon: HelpCircle,
    questions: [
      {
        q: "What is Frank Electronics?",
        a: "Frank Electronics is a trusted electronics retailer based in Kigali, Rwanda. We specialize in providing high-quality smartphones, laptops, tablets, and tech accessories at competitive prices with exceptional customer service."
      },
      {
        q: "Where are you located?",
        a: "Our main store is located at Kicukiro Street, Building 123, Kigali, Rwanda, near Kigali City Tower. We're open Monday-Saturday 9AM-6PM."
      },
      {
        q: "Do you ship nationwide?",
        a: "Yes, we ship to all cities and provinces across Rwanda. We also offer international shipping to select East African countries. Delivery times vary from 1-3 business days within Kigali and 3-7 days nationwide."
      }
    ]
  },
  {
    category: "Products",
    icon: Package,
    questions: [
      {
        q: "Are your products authentic?",
        a: "Absolutely! All our products are 100% genuine and come with manufacturer warranties. We source directly from authorized distributors and manufacturers to ensure authenticity."
      },
      {
        q: "Do you offer warranties on all products?",
        a: "Yes, all products come with manufacturer warranties. Additionally, we offer our own 1-year warranty on most items for added peace of mind. Warranty terms vary by product type."
      },
      {
        q: "Can I test products before buying?",
        a: "Yes! We have demo units available for testing at our showroom. Our knowledgeable staff can help you try products and answer any questions before making your purchase."
      }
    ]
  },
  {
    category: "Payment",
    icon: CreditCard,
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept multiple payment methods including: Visa/Mastercard, MTN Mobile Money, Airtel Money, and cash on delivery. All transactions are secure and encrypted."
      },
      {
        q: "Do you offer financing options?",
        a: "Yes, we partner with local banks to offer financing on purchases over RWF 500,000. Terms and conditions apply. Visit our store for more details on available financing plans."
      },
      {
        q: "Is my payment information secure?",
        a: "Absolutely! We use industry-standard SSL encryption and comply with PCI DSS standards. Your payment information is never stored on our servers and is processed through secure payment gateways."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    icon: Truck,
    questions: [
      {
        q: "How long does delivery take?",
        a: "Delivery times vary: Kigali - 1-2 business days, Upcountry - 3-5 business days, International - 7-14 business days. You'll receive tracking information for all orders."
      },
      {
        q: "How much does shipping cost?",
        a: "Shipping costs depend on location and order size: Kigali - RWF 2,000, Upcountry - RWF 5,000, Orders over RWF 100,000 qualify for free shipping nationwide."
      },
      {
        q: "Can I track my order?",
        a: "Yes! Once your order ships, you'll receive a tracking number via email and SMS. You can track your order on our website or contact our support team for updates."
      }
    ]
  },
  {
    category: "Returns & Warranty",
    icon: Shield,
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 7-day return policy for unused items in original packaging. Items must be returned with proof of purchase. Some exclusions apply for customized items and software."
      },
      {
        q: "How do I make a warranty claim?",
        a: "For warranty claims, bring your receipt and the product to our store. Our technical team will assess the issue and either repair, replace, or refund according to warranty terms."
      },
      {
        q: "What if my product arrives damaged?",
        a: "If your product arrives damaged, contact us immediately within 24 hours. We'll arrange for a replacement at no additional cost. Please take photos of the damage for our records."
      }
    ]
  }
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Find answers to common questions about our products, services, and policies.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <Input
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-14 h-14 text-lg bg-white/90 backdrop-blur-sm border-2 border-gray-200/60 focus:border-orange-400"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <Card key={category.category} className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200/60">
                <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                  <category.icon className="w-8 h-8 mr-4 text-orange-500" />
                  {category.category}
                  <Badge className="ml-auto bg-orange-100 text-orange-800 border-orange-200">
                    {category.questions.length} questions
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const itemId = `${categoryIndex}-${index}`
                    const isExpanded = expandedItems.has(itemId)
                    
                    return (
                      <div key={itemId} className="border border-gray-200/60 rounded-xl overflow-hidden hover:border-orange-300 transition-all duration-200">
                        <button
                          onClick={() => toggleExpanded(itemId)}
                          className="w-full px-6 py-4 bg-gradient-to-r from-gray-50 to-white/50 hover:from-orange-50 hover:to-orange-100/50 transition-all duration-200 text-left flex items-center justify-between group"
                        >
                          <span className="font-medium text-gray-900 group-hover:text-orange-700 transition-colors">
                            {item.q}
                          </span>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                              {category.category}
                            </Badge>
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" />
                            )}
                          </div>
                        </button>
                        
                        {isExpanded && (
                          <div className="px-6 py-4 bg-white border-t border-gray-200/60">
                            <p className="text-gray-700 leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <Card className="text-center py-16">
            <CardContent>
              <div className="max-w-md mx-auto space-y-6">
                <HelpCircle className="w-16 h-16 mx-auto text-gray-400" />
                <h2 className="text-2xl font-semibold text-gray-900">No Results Found</h2>
                <p className="text-gray-600 leading-relaxed">
                  We couldn't find any answers matching "{searchTerm}". Try different keywords or browse our categories above.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Help Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50/50 p-12 rounded-2xl border border-blue-200/60">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Still Need Help?</h2>
          <p className="text-blue-800 leading-relaxed mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our customer support team is here to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 font-semibold">
              Contact Support
            </button>
            <button className="h-12 px-8 bg-white border-2 border-blue-500 text-blue-600 rounded-xl hover:bg-blue-50 transform hover:-translate-y-0.5 transition-all duration-200 font-semibold">
              Start Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
