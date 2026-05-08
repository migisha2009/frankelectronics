"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Search, 
  Clock, 
  Send,
  CheckCircle,
  Headphones,
  Package,
  CreditCard,
  User,
  HelpCircle
} from "lucide-react"

export default function CustomerSupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general"
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const supportCategories = [
    { id: "general", name: "General Inquiry", icon: HelpCircle },
    { id: "technical", name: "Technical Support", icon: Headphones },
    { id: "order", name: "Order Issues", icon: Package },
    { id: "payment", name: "Payment Problems", icon: CreditCard },
    { id: "account", name: "Account Help", icon: User }
  ]

  const faqItems = [
    {
      category: "Getting Started",
      questions: [
        "How do I create an account?",
        "Where can I find my order history?",
        "How do I track my order?",
        "What payment methods do you accept?"
      ]
    },
    {
      category: "Product Support",
      questions: [
        "How do I return an item?",
        "What is your warranty policy?",
        "Do you offer technical support?",
        "How do I check product compatibility?"
      ]
    },
    {
      category: "Account & Billing",
      questions: [
        "How do I update my address?",
        "How do I change my password?",
        "How do I view my order history?",
        "How do I cancel a subscription?"
      ]
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "", category: "general" })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4">
        <Card className="max-w-md w-full hover:shadow-xl transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Support Request Sent!</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Thank you for contacting Frank Electronics support. We've received your message and will respond within 24 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="h-12 px-8"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Customer Support
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We're here to help you 24/7. Find answers or contact our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
                <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center">
                  <MessageSquare className="w-8 h-8 mr-3 text-blue-600" />
                  Contact Support
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-base font-semibold text-gray-800">Full Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        className="h-12"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-base font-semibold text-gray-800">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@example.com"
                        className="h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-base font-semibold text-gray-800">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange("category", e.target.value)}
                      className="h-12 w-full rounded-xl border border-gray-200/60 bg-white/90 backdrop-blur-sm px-4 py-3 text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:border-orange-400 focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-gray-300 hover:bg-white shadow-sm hover:shadow-md"
                    >
                      {supportCategories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-base font-semibold text-gray-800">Subject *</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="How can we help you?"
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-base font-semibold text-gray-800">Message *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your issue in detail..."
                      rows={5}
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Help */}
          <div className="space-y-8">
            {/* Contact Options */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
                <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-green-600" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50/50 rounded-xl border border-green-200/60">
                  <Phone className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900">Phone Support</p>
                    <p className="text-green-800">+250 78 777 777</p>
                    <p className="text-sm text-green-700">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-xl border border-blue-200/60">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-900">Email Support</p>
                    <p className="text-blue-800">support@frankelectronics.com</p>
                    <p className="text-sm text-blue-700">Response within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50/50 rounded-xl border border-orange-200/60">
                  <MessageSquare className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-semibold text-orange-900">Live Chat</p>
                    <p className="text-orange-800">Available 9AM-6PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50/50 border-b border-purple-200/60">
                <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                  <HelpCircle className="w-6 h-6 mr-2 text-purple-600" />
                  Quick FAQ
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {faqItems.map((section) => (
                    <div key={section.category}>
                      <h3 className="font-semibold text-gray-900 mb-3 text-lg">{section.category}</h3>
                      <ul className="space-y-2">
                        {section.questions.map((question, index) => (
                          <li key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
                            <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Hours */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50/50 border-b border-yellow-200/60">
                <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-yellow-600" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 text-gray-700">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-50 to-amber-50/50 rounded-xl border border-yellow-200/60">
                    <span className="font-semibold text-yellow-900">Monday - Friday</span>
                    <span className="text-yellow-800">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-50 to-amber-50/50 rounded-xl border border-yellow-200/60">
                    <span className="font-semibold text-yellow-900">Saturday</span>
                    <span className="text-yellow-800">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-rose-50/50 rounded-xl border border-red-200/60">
                    <span className="font-semibold text-red-900">Sunday</span>
                    <span className="text-red-800">Closed</span>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      For urgent issues outside business hours, please call our emergency line: <span className="font-bold text-red-600">+250 78 888 888</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
