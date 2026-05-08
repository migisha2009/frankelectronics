"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

import {
  CreditCard,
  Smartphone,
  Wallet,
  Plus,
  Trash2,
  Shield,
  TrendingUp,
  Clock,
} from "lucide-react"

export default function PaymentMethodsPage() {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: "1",
      type: "credit_card",
      name: "Visa ending in 4242",
      cardType: "visa",
      isDefault: true,
      expiryDate: "12/25",
    },
    {
      id: "2",
      type: "mobile_money",
      name: "MTN Mobile Money",
      phoneNumber: "+250 78 999 999",
      isDefault: false,
    },
    {
      id: "3",
      type: "mobile_money",
      name: "Airtel Money",
      phoneNumber: "+250 73 888 888",
      isDefault: false,
    },
  ])

  const [showAddForm, setShowAddForm] = useState(false)

  const [newPayment, setNewPayment] = useState({
    type: "credit_card",
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    phoneNumber: "",
  })

  const handleSetDefault = (id: string) => {
    setPaymentMethods((prev) =>
      prev.map((method) => ({
        ...method,
        isDefault: method.id === id,
      }))
    )
  }

  const handleDeleteMethod = (id: string) => {
    setPaymentMethods((prev) =>
      prev.filter((method) => method.id !== id)
    )
  }

  const handleAddPayment = () => {
    if (!newPayment.name.trim()) return

    const newMethod = {
      id: Date.now().toString(),
      type: newPayment.type,
      name: newPayment.name,

      ...(newPayment.type === "credit_card"
        ? {
            cardType: "visa",
            expiryDate: newPayment.expiryDate,
          }
        : {
            phoneNumber: newPayment.phoneNumber,
          }),

      isDefault: false,
    }

    setPaymentMethods((prev) => [...prev, newMethod])

    setNewPayment({
      type: "credit_card",
      name: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      phoneNumber: "",
    })

    setShowAddForm(false)
  }

  const getPaymentIcon = (type: string) => {
    switch (type) {
      case "credit_card":
        return CreditCard

      case "mobile_money":
        return Smartphone

      default:
        return Wallet
    }
  }

  const getPaymentBadge = (type: string) => {
    switch (type) {
      case "credit_card":
        return "bg-orange-100 text-orange-700 border-orange-200"

      case "mobile_money":
        return "bg-green-100 text-green-700 border-green-200"

      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF4E8]">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#0f172a] mb-4">
            Payment Methods
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage your payment methods for secure and faster checkout.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <Card className="rounded-2xl border-0 shadow-md">
            <CardContent className="p-6 text-center">

              <div className="w-16 h-16 rounded-full bg-[#EF7B2A] flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-[#0f172a]">
                {paymentMethods.length}
              </h3>

              <p className="text-gray-600">
                Saved Methods
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 shadow-md">
            <CardContent className="p-6 text-center">

              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-[#0f172a]">
                100%
              </h3>

              <p className="text-gray-600">
                Secure
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 shadow-md">
            <CardContent className="p-6 text-center">

              <div className="w-16 h-16 rounded-full bg-[#0f172a] flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-[#0f172a]">
                24/7
              </h3>

              <p className="text-gray-600">
                Support
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Add Payment Method */}
        <Card className="rounded-2xl border-0 shadow-md mb-10">

          <CardHeader>
            <CardTitle className="flex items-center text-[#0f172a]">
              <Plus className="w-6 h-6 mr-2 text-[#EF7B2A]" />
              Add Payment Method
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-8">

            {!showAddForm ? (
              <Button
                onClick={() => setShowAddForm(true)}
                className="bg-[#EF7B2A] hover:bg-orange-600 text-white rounded-xl h-12"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add New Payment Method
              </Button>
            ) : (
              <div className="space-y-8">

                {/* Type Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <button
                    onClick={() =>
                      setNewPayment((prev) => ({
                        ...prev,
                        type: "credit_card",
                      }))
                    }
                    className={`p-6 rounded-2xl border-2 transition ${
                      newPayment.type === "credit_card"
                        ? "border-[#EF7B2A] bg-orange-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <CreditCard className="w-8 h-8 text-[#EF7B2A] mx-auto mb-3" />

                    <h3 className="font-semibold text-[#0f172a]">
                      Credit / Debit Card
                    </h3>

                    <p className="text-sm text-gray-500">
                      Visa, Mastercard
                    </p>
                  </button>

                  <button
                    onClick={() =>
                      setNewPayment((prev) => ({
                        ...prev,
                        type: "mobile_money",
                      }))
                    }
                    className={`p-6 rounded-2xl border-2 transition ${
                      newPayment.type === "mobile_money"
                        ? "border-[#EF7B2A] bg-orange-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <Smartphone className="w-8 h-8 text-[#EF7B2A] mx-auto mb-3" />

                    <h3 className="font-semibold text-[#0f172a]">
                      Mobile Money
                    </h3>

                    <p className="text-sm text-gray-500">
                      MTN MoMo, Airtel Money
                    </p>
                  </button>
                </div>

                {/* Form */}
                {newPayment.type === "credit_card" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                      <label className="block mb-2 font-medium text-[#0f172a]">
                        Cardholder Name
                      </label>

                      <Input
                        placeholder="John Doe"
                        value={newPayment.name}
                        onChange={(e) =>
                          setNewPayment((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-[#0f172a]">
                        Card Number
                      </label>

                      <Input
                        placeholder="1234 5678 9012 3456"
                        value={newPayment.cardNumber}
                        onChange={(e) =>
                          setNewPayment((prev) => ({
                            ...prev,
                            cardNumber: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-[#0f172a]">
                        Expiry Date
                      </label>

                      <Input
                        placeholder="MM/YY"
                        value={newPayment.expiryDate}
                        onChange={(e) =>
                          setNewPayment((prev) => ({
                            ...prev,
                            expiryDate: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-[#0f172a]">
                        CVV
                      </label>

                      <Input
                        placeholder="123"
                        type="password"
                        value={newPayment.cvv}
                        onChange={(e) =>
                          setNewPayment((prev) => ({
                            ...prev,
                            cvv: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">

                    <div>
                      <label className="block mb-2 font-medium text-[#0f172a]">
                        Account Name
                      </label>

                      <Input
                        placeholder="John Doe"
                        value={newPayment.name}
                        onChange={(e) =>
                          setNewPayment((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-[#0f172a]">
                        Phone Number
                      </label>

                      <Input
                        placeholder="+250 78 999 999"
                        value={newPayment.phoneNumber}
                        onChange={(e) =>
                          setNewPayment((prev) => ({
                            ...prev,
                            phoneNumber: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-4">

                  <Button
                    onClick={handleAddPayment}
                    className="bg-[#EF7B2A] hover:bg-orange-600 text-white rounded-xl"
                  >
                    Save Payment Method
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
                    className="rounded-xl"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Saved Methods */}
        <div className="space-y-6">

          <h2 className="text-2xl font-bold text-[#0f172a]">
            Saved Payment Methods
          </h2>

          {paymentMethods.map((method) => {
            const Icon = getPaymentIcon(method.type)

            return (
              <Card
                key={method.id}
                className="rounded-2xl border-0 shadow-md"
              >
                <CardContent className="p-6">

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 bg-[#EF7B2A] rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#0f172a]">
                          {method.name}
                        </h3>

                        <div className="flex items-center gap-2 mt-2">

                          <Badge className={getPaymentBadge(method.type)}>
                            {method.type === "credit_card"
                              ? "Credit Card"
                              : "Mobile Money"}
                          </Badge>

                          {method.isDefault && (
                            <Badge className="bg-green-100 text-green-700 border-green-200">
                              Default
                            </Badge>
                          )}
                        </div>

                        {method.type === "credit_card" &&
                          "expiryDate" in method && (
                            <div className="flex items-center text-sm text-gray-500 mt-3">
                              <Clock className="w-4 h-4 mr-2" />
                              Expires: {method.expiryDate}
                            </div>
                          )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">

                      {!method.isDefault && (
                        <Button
                          variant="outline"
                          onClick={() => handleSetDefault(method.id)}
                          className="rounded-xl"
                        >
                          Set Default
                        </Button>
                      )}

                      <Button
                        variant="outline"
                        onClick={() => handleDeleteMethod(method.id)}
                        className="rounded-xl text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Security Section */}
        <div className="mt-14 bg-white rounded-3xl shadow-md p-10">

          <div className="flex items-center justify-center mb-8">
            <Shield className="w-8 h-8 text-[#EF7B2A] mr-3" />

            <h2 className="text-3xl font-bold text-[#0f172a]">
              Security Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#FFF4E8] p-6 rounded-2xl">
              <h3 className="font-semibold text-[#0f172a] mb-3">
                Keep Information Private
              </h3>

              <p className="text-gray-600">
                Never share your payment credentials with anyone.
              </p>
            </div>

            <div className="bg-[#FFF4E8] p-6 rounded-2xl">
              <h3 className="font-semibold text-[#0f172a] mb-3">
                Use Secure Networks
              </h3>

              <p className="text-gray-600">
                Only use trusted internet connections when paying online.
              </p>
            </div>

            <div className="bg-[#FFF4E8] p-6 rounded-2xl">
              <h3 className="font-semibold text-[#0f172a] mb-3">
                Monitor Transactions
              </h3>

              <p className="text-gray-600">
                Review your payment history regularly.
              </p>
            </div>

            <div className="bg-[#FFF4E8] p-6 rounded-2xl">
              <h3 className="font-semibold text-[#0f172a] mb-3">
                Update Expired Cards
              </h3>

              <p className="text-gray-600">
                Keep your payment details updated at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}