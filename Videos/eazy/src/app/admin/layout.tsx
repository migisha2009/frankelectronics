import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    redirect("/login")
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <div className="min-h-full bg-gradient-to-br from-white/80 via-gray-50/60 to-white/40 backdrop-blur-sm">
          {children}
        </div>
      </div>
    </div>
  )
}
