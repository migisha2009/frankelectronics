"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Send } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubscribed(true)
      setEmail("")
    } catch (error) {
      console.error("Newsletter subscription failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="p-3 bg-orange-500 rounded-full">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Stay Updated with Frank
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get exclusive offers, new product alerts, and tech news delivered to your inbox. 
              Join our community of tech enthusiasts in Rwanda!
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Subscribing...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Subscribe
                    <Send className="ml-2 w-4 h-4" />
                  </div>
                )}
              </Button>
            </form>
          ) : (
            <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-green-400 font-medium">
                🎉 Thank you for subscribing! Check your email for confirmation.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Exclusive Deals",
                description: "Get special offers only available to subscribers"
              },
              {
                title: "New Arrivals",
                description: "Be the first to know about new products"
              },
              {
                title: "Tech Tips",
                description: "Expert advice and product recommendations"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
