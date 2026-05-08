import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { 
  Settings, 
  Mail, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  CreditCard, 
  Package,
  Save,
  RotateCcw
} from "lucide-react"

export default function AdminSettings() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Settings</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">Configure your e-commerce platform settings, preferences, and system configurations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Store Settings */}
        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 lg:col-span-2">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
              <Settings className="w-6 h-6 mr-3 text-blue-600" />
              Store Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="storeName" className="text-base font-semibold text-gray-800">Store Name</Label>
                <Input
                  id="storeName"
                  defaultValue="Frank Electronics"
                  className="h-12"
                  placeholder="Enter your store name"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="storeEmail" className="text-base font-semibold text-gray-800">Store Email</Label>
                <Input
                  id="storeEmail"
                  defaultValue="support@frankelectronics.com"
                  type="email"
                  className="h-12"
                  placeholder="support@frankelectronics.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="storePhone" className="text-base font-semibold text-gray-800">Store Phone</Label>
                <Input
                  id="storePhone"
                  defaultValue="+250 788 123 456"
                  className="h-12"
                  placeholder="+250 788 123 456"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="storeAddress" className="text-base font-semibold text-gray-800">Store Address</Label>
                <Input
                  id="storeAddress"
                  defaultValue="Kigali, Rwanda"
                  className="h-12"
                  placeholder="Kigali, Rwanda"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="storeDescription" className="text-base font-semibold text-gray-800">Store Description</Label>
              <textarea
                id="storeDescription"
                defaultValue="Your trusted electronics store for quality products and excellent service."
                className="min-h-[100px] w-full rounded-xl border border-gray-200/60 bg-white/90 backdrop-blur-sm px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:border-orange-400 focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-gray-300 hover:bg-white shadow-sm hover:shadow-md resize-none"
                rows={4}
                placeholder="Describe your store..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
              <Bell className="w-6 h-6 mr-3 text-green-600" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="emailNotifications" className="text-base font-semibold text-gray-800">Email Notifications</Label>
                  <p className="text-sm text-gray-600">Receive order and customer updates via email</p>
                </div>
                <Checkbox
                  id="emailNotifications"
                  defaultChecked={true}
                  className="h-5 w-5"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="smsNotifications" className="text-base font-semibold text-gray-800">SMS Notifications</Label>
                  <p className="text-sm text-gray-600">Get critical alerts via SMS</p>
                </div>
                <Checkbox
                  id="smsNotifications"
                  defaultChecked={false}
                  className="h-5 w-5"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="lowStockAlerts" className="text-base font-semibold text-gray-800">Low Stock Alerts</Label>
                  <p className="text-sm text-gray-600">Notify when products run low on inventory</p>
                </div>
                <Checkbox
                  id="lowStockAlerts"
                  defaultChecked={true}
                  className="h-5 w-5"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Settings */}
        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50/50 border-b border-purple-200/60">
            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
              <CreditCard className="w-6 h-6 mr-3 text-purple-600" />
              Payment Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="stripeEnabled" className="text-base font-semibold text-gray-800">Stripe Payments</Label>
                  <p className="text-sm text-gray-600">Accept credit card payments</p>
                </div>
                <Checkbox
                  id="stripeEnabled"
                  defaultChecked={true}
                  className="h-5 w-5"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="mobileMoneyEnabled" className="text-base font-semibold text-gray-800">Mobile Money</Label>
                  <p className="text-sm text-gray-600">Accept mobile money payments</p>
                </div>
                <Checkbox
                  id="mobileMoneyEnabled"
                  defaultChecked={true}
                  className="h-5 w-5"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="cashOnDeliveryEnabled" className="text-base font-semibold text-gray-800">Cash on Delivery</Label>
                  <p className="text-sm text-gray-600">Accept cash payments on delivery</p>
                </div>
                <Checkbox
                  id="cashOnDeliveryEnabled"
                  defaultChecked={true}
                  className="h-5 w-5"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Appearance Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50/50 border-b border-orange-200/60">
            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
              <Palette className="w-6 h-6 mr-3 text-orange-600" />
              Appearance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="theme" className="text-base font-semibold text-gray-800">Theme</Label>
                <Select defaultValue="light">
                  <SelectTrigger className="h-12 bg-white/90 backdrop-blur-sm">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="auto">Auto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="primaryColor" className="text-base font-semibold text-gray-800">Primary Color</Label>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl border-2 border-orange-600"></div>
                  <Select defaultValue="orange">
                    <SelectTrigger className="h-12 bg-white/90 backdrop-blur-sm">
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="orange">Orange</SelectItem>
                      <SelectItem value="blue">Blue</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="purple">Purple</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50/50 border-b border-gray-200/60">
            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
              <Globe className="w-6 h-6 mr-3 text-gray-600" />
              Localization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="currency" className="text-base font-semibold text-gray-800">Currency</Label>
                <Select defaultValue="USD">
                  <SelectTrigger className="h-12 bg-white/90 backdrop-blur-sm">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD ($)</SelectItem>
                    <SelectItem value="EUR">EUR (€)</SelectItem>
                    <SelectItem value="GBP">GBP (£)</SelectItem>
                    <SelectItem value="RWF">RWF (Frw)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="timezone" className="text-base font-semibold text-gray-800">Timezone</Label>
                <Select defaultValue="Africa/Kigali">
                  <SelectTrigger className="h-12 bg-white/90 backdrop-blur-sm">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Africa/Kigali">Kigali (GMT+2)</SelectItem>
                    <SelectItem value="Europe/London">London (GMT+0)</SelectItem>
                    <SelectItem value="America/New_York">New York (GMT-5)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Settings */}
      <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50/50 border-b border-red-200/60">
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-red-600" />
            Advanced Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="maintenanceMode" className="text-base font-semibold text-gray-800">Maintenance Mode</Label>
                <p className="text-sm text-gray-600">Temporarily disable customer access</p>
              </div>
              <Checkbox
                id="maintenanceMode"
                defaultChecked={false}
                className="h-5 w-5"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="debugMode" className="text-base font-semibold text-gray-800">Debug Mode</Label>
                <p className="text-sm text-gray-600">Enable detailed logging</p>
              </div>
              <Checkbox
                id="debugMode"
                defaultChecked={false}
                className="h-5 w-5"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="apiRateLimit" className="text-base font-semibold text-gray-800">API Rate Limiting</Label>
                <p className="text-sm text-gray-600">Limit API requests per minute</p>
              </div>
              <Input
                id="apiRateLimit"
                type="number"
                defaultValue="100"
                className="h-12 w-32"
                placeholder="100"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200/60">
        <Button variant="outline" className="h-12 px-8">
          <RotateCcw className="w-5 h-5 mr-3" />
          Reset to Defaults
        </Button>
        <Button className="h-12 px-8 text-base font-semibold">
          <Save className="w-5 h-5 mr-3" />
          Save Settings
        </Button>
      </div>
    </div>
  )
}
