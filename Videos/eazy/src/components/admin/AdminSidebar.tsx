"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  Grid3x3,
  ShoppingCart,
  Users,
  PackageSearch,
  BarChart3,
  CreditCard,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react"
import { useState } from "react"
import { signOut } from "next-auth/react"

const menuItems = [
  {
    href: "/admin",
    label: "Dashboard Overview",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/products",
    label: "Products",
    icon: Package,
  },
  {
    href: "/admin/products/add",
    label: "Add Product",
    icon: PlusCircle,
  },
  {
    href: "/admin/categories",
    label: "Categories",
    icon: Grid3x3,
  },
  {
    href: "/admin/orders",
    label: "Orders",
    icon: ShoppingCart,
  },
  {
    href: "/admin/users",
    label: "Users",
    icon: Users,
  },
  {
    href: "/admin/inventory",
    label: "Inventory",
    icon: PackageSearch,
  },
  {
    href: "/admin/analytics",
    label: "Analytics",
    icon: BarChart3,
  },
  {
    href: "/admin/payments",
    label: "Payments",
    icon: CreditCard,
  },
  {
    href: "/admin/messages",
    label: "Messages",
    icon: MessageSquare,
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: Settings,
  },
  {
    href: "#logout",
    label: "Logout",
    icon: LogOut,
    isLogout: true,
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={`bg-gray-900 border-r border-gray-700 text-white transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex items-center justify-between p-6 border-b border-gray-700">
        {!isCollapsed && (
          <div>
            <img 
              src="/frank-electronics-logo.png" 
              alt="Frank Electronics Logo" 
              className="h-16 w-auto mb-2"
            />
            <p className="text-xs text-white">Electronics Store</p>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2.5 rounded hover:bg-gray-800 transition-colors"
        >
          {isCollapsed ? <Menu className="w-5 h-5 group-hover:text-orange-400 transition-colors" /> : <X className="w-5 h-5 group-hover:text-orange-400 transition-colors" />}
        </button>
      </div>

      <nav className="p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            if (item.isLogout) {
              return (
                <li key="logout">
                  <button
                    onClick={() => signOut()}
                    className="flex items-center space-x-3 px-3 py-2 rounded hover:bg-gray-800 w-full text-left"
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && (
                      <span className="text-sm">{item.label}</span>
                    )}
                  </button>
                </li>
              )
            } else {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded w-full text-left ${
                      isActive ? 'bg-orange-600 text-white' : 'hover:bg-gray-800'
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && (
                      <span className="text-sm">{item.label}</span>
                    )}
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      </nav>

    </div>
  )
}
