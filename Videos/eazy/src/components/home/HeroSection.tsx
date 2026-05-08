 "use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Laptop, Headphones } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Latest Smartphones",
      subtitle: "Premium mobile devices at unbeatable prices",
      image: "/hero-phone.jpg",
      icon: Smartphone,
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "High-Performance Laptops",
      subtitle: "Work and play with cutting-edge technology",
      image: "/hero-laptop.jpg", 
      icon: Laptop,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Premium Audio",
      subtitle: "Immersive sound experience",
      image: "/hero-audio.jpg",
      icon: Headphones,
      color: "from-purple-400 to-purple-600"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Frank
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your trusted electronics store in Kigali, Rwanda. 
                Discover the latest smartphones, laptops, and tech accessories.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/categories">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
                >
                  Browse Categories
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { label: "Fast Delivery", value: "24H" },
                { label: "Customer Support", value: "24/7" },
                { label: "Secure Payment", value: "100%" }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-orange-500">{feature.value}</div>
                  <div className="text-sm text-gray-600">{feature.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className={`h-full bg-gradient-to-br ${slide.color} opacity-10`}></div>
                  <div className="flex items-center justify-center h-full">
                    <slide.icon className="w-32 h-32 text-orange-500 opacity-20" />
                  </div>
                </div>
              ))}
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "w-8 bg-orange-500" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
