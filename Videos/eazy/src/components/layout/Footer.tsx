import Link from "next/link"
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Share2, 
  Camera, 
  Play,
  Smartphone,
  Laptop,
  Tablet,
  Headphones
} from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const categories = [
    { name: "Smartphones", icon: Smartphone, href: "/categories/smartphones" },
    { name: "Laptops", icon: Laptop, href: "/categories/laptops" },
    { name: "Tablets", icon: Tablet, href: "/categories/tablets" },
    { name: "Audio", icon: Headphones, href: "/categories/audio" }
  ]

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Shipping & Returns", href: "/shipping" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ]

  const customerService = [
    { name: "Track Order", href: "/track" },
    { name: "My Account", href: "/dashboard" },
    { name: "Wishlist", href: "/wishlist" },
    { name: "Customer Support", href: "/support" },
    { name: "Product Warranty", href: "/warranty" },
    { name: "Payment Methods", href: "/payments" }
  ]

  const socialLinks = [
    { icon: MessageCircle, href: "#", label: "Facebook" },
    { icon: Share2, href: "#", label: "Twitter" },
    { icon: Camera, href: "#", label: "Instagram" },
    { icon: Play, href: "#", label: "YouTube" }
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/frank-electronics-logo.png" 
                  alt="Frank Electronics Logo" 
                  className="h-16 w-auto"
                />
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted electronics store in Kigali, Rwanda. We offer premium smartphones, 
                laptops, and tech accessories at competitive prices.
              </p>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>Kicukiro, Kigali, Rwanda</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>+250 78 999 999</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span>frankelectronics@gmail.com</span>
                </div>
              </div>

              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-500">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={category.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-500">Customer Service</h3>
              <ul className="space-y-3">
                {customerService.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="py-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-gray-400 mb-4">We Accept</h4>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span className="bg-white text-gray-900 px-3 py-1 rounded font-medium">Visa</span>
                <span className="bg-white text-gray-900 px-3 py-1 rounded font-medium">Mastercard</span>
                <span className="bg-white text-gray-900 px-3 py-1 rounded font-medium">MTN MoMo</span>
                <span className="bg-white text-gray-900 px-3 py-1 rounded font-medium">Airtel Money</span>
                <span className="bg-white text-gray-900 px-3 py-1 rounded font-medium">Cash</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-400 text-sm">
              © {currentYear} Frank Electronics. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              Made with ❤️ in Kigali, Rwanda
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
