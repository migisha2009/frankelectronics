import { prisma } from "@/lib/prisma"
import HeroSection from "@/components/home/HeroSection"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import Categories from "@/components/home/Categories"
import Newsletter from "@/components/home/Newsletter"

export default async function Home() {
  const featuredProducts = await prisma.product.findMany({
    where: { isFeatured: true, isActive: true },
    include: { category: true },
    take: 8,
    orderBy: { createdAt: "desc" }
  })

  // Convert Decimal to number for frontend
  const serializedProducts = featuredProducts.map((product: any) => ({
    ...product,
    price: parseFloat(product.price.toString()),
    discountPrice: product.discountPrice ? parseFloat(product.discountPrice.toString()) : null,
    rating: parseFloat(product.rating.toString())
  }))

  const categories = await prisma.category.findMany({
    where: { isFeatured: true },
    take: 6,
    orderBy: { name: "asc" }
  })

  // Convert null to undefined for imageUrl
  const serializedCategories = categories.map((category: any) => ({
    ...category,
    imageUrl: category.imageUrl || undefined
  }))

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts products={serializedProducts} />
      <Categories categories={serializedCategories} />
      <Newsletter />
    </div>
  )
}
