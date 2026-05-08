import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  MessageSquare, 
  Search, 
  Filter, 
  Mail, 
  User, 
  Clock, 
  Star,
  Reply,
  Trash2,
  Archive
} from "lucide-react"

// Mock data for messages - in real app would come from database
const messages = [
  {
    id: '1',
    customerName: 'John Doe',
    email: 'john.doe@example.com',
    subject: 'Question about laptop availability',
    message: 'Hi, I was wondering if you have the Dell XPS 15 in stock? I\'m looking to purchase it next week.',
    date: '2024-01-15',
    status: 'unread',
    priority: 'high',
    category: 'product_inquiry'
  },
  {
    id: '2',
    customerName: 'Jane Smith',
    email: 'jane.smith@example.com',
    subject: 'Order #12345 - Shipping Issue',
    message: 'I placed an order last week but haven\'t received any shipping confirmation. Can you please check the status?',
    date: '2024-01-14',
    status: 'read',
    priority: 'medium',
    category: 'order_issue'
  },
  {
    id: '3',
    customerName: 'Mike Johnson',
    email: 'mike.j@example.com',
    subject: 'Return request for wireless headphones',
    message: 'I received the Sony WH-1000XM4 headphones but they\'re not working properly. The left side has no sound. I\'d like to return or exchange them.',
    date: '2024-01-13',
    status: 'replied',
    priority: 'high',
    category: 'return_request'
  },
  {
    id: '4',
    customerName: 'Sarah Wilson',
    email: 'sarah.w@example.com',
    subject: 'Thank you for excellent service!',
    message: 'Just wanted to say thank you for the quick delivery and great customer service. The MacBook Pro is exactly what I wanted.',
    date: '2024-01-12',
    status: 'archived',
    priority: 'low',
    category: 'feedback'
  },
  {
    id: '5',
    customerName: 'Tom Brown',
    email: 'tom.b@example.com',
    subject: 'Bulk order inquiry',
    message: 'We are a small business looking to order 20 units of the iPad Air for our team. Do you offer bulk discounts?',
    date: '2024-01-11',
    status: 'unread',
    priority: 'medium',
    category: 'bulk_order'
  }
]

export default function AdminMessages() {
  const unreadCount = messages.filter(msg => msg.status === 'unread').length
  const highPriorityCount = messages.filter(msg => msg.priority === 'high').length

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Messages</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">Manage customer inquiries, support requests, and feedback from your e-commerce platform.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search messages..." 
              className="pl-12 w-64 h-12 bg-white/90 backdrop-blur-sm"
            />
          </div>
          <Select>
            <SelectTrigger className="w-40 h-12 bg-white/90 backdrop-blur-sm">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="unread">Unread</SelectItem>
              <SelectItem value="read">Read</SelectItem>
              <SelectItem value="replied">Replied</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-b border-blue-200/60">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-blue-800">Total Messages</CardTitle>
              <MessageSquare className="w-5 h-5 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{messages.length}</div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50/50 border-b border-yellow-200/60">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-yellow-800">Unread</CardTitle>
              <Mail className="w-5 h-5 text-yellow-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{unreadCount}</div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50/50 border-b border-red-200/60">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-red-800">High Priority</CardTitle>
              <Star className="w-5 h-5 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{highPriorityCount}</div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50/50 border-b border-green-200/60">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-green-800">Response Rate</CardTitle>
              <Clock className="w-5 h-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">2.4h</div>
            <div className="text-sm text-green-600">Avg response time</div>
          </CardContent>
        </Card>
      </div>

      {/* Messages List */}
      <Card className="hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200/60">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold text-gray-900">Recent Messages</CardTitle>
            <div className="flex items-center gap-4">
              <Select>
                <SelectTrigger className="w-40 h-10 bg-white/90 backdrop-blur-sm">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="product_inquiry">Product Inquiry</SelectItem>
                  <SelectItem value="order_issue">Order Issue</SelectItem>
                  <SelectItem value="return_request">Return Request</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="bulk_order">Bulk Order</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40 h-10 bg-white/90 backdrop-blur-sm">
                  <SelectValue placeholder="All Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="border border-gray-200/60 rounded-xl p-6 hover:bg-gray-50 transition-colors group">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                        {message.customerName.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {message.customerName}
                        </h3>
                        <p className="text-sm text-gray-600">{message.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Badge className={
                        message.status === 'unread' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                        message.status === 'read' ? 'bg-gray-100 text-gray-800 border-gray-200' :
                        message.status === 'replied' ? 'bg-green-100 text-green-800 border-green-200' :
                        'bg-yellow-100 text-yellow-800 border-yellow-200'
                      }>
                        {message.status}
                      </Badge>
                      <Badge className={
                        message.priority === 'high' ? 'bg-red-100 text-red-800 border-red-200' :
                        message.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                        'bg-green-100 text-green-800 border-green-200'
                      }>
                        {message.priority} priority
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">
                      {message.date}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">{message.subject}</h4>
                    <p className="text-gray-700 leading-relaxed">{message.message}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity lg:flex lg:flex-col lg:items-end">
                  <Button variant="outline" size="sm" className="h-9">
                    <Reply className="w-4 h-4 mr-2" />
                    Reply
                  </Button>
                  <Button variant="outline" size="sm" className="h-9 text-green-600 hover:text-green-700 hover:border-green-300">
                    Archive
                  </Button>
                  <Button variant="outline" size="sm" className="h-9 text-red-600 hover:text-red-700 hover:border-red-300">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
