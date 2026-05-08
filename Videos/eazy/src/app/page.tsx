import HeroSection from "@/components/home/HeroSection"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import Categories from "@/components/home/Categories"
import Newsletter from "@/components/home/Newsletter"

// Fallback data for when database is not available
const fallbackProducts = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    price: 1299.99,
    discountPrice: 1199.99,
    rating: 4.8,
    reviewCount: 245,
    images: ["/products/iphone-15-pro.jpg"],
    category: { name: "Smartphones" }
  },
  {
    id: "2",
    name: "MacBook Air M2",
    price: 999.99,
    discountPrice: undefined,
    rating: 4.9,
    reviewCount: 189,
    images: ["/products/macbook-air.jpg"],
    category: { name: "Laptops" }
  },
  {
    id: "3",
    name: "AirPods Pro",
    price: 249.99,
    discountPrice: 199.99,
    rating: 4.7,
    reviewCount: 412,
    images: ["/products/airpods-pro.jpg"],
    category: { name: "Audio" }
  },
  {
    id: "4",
    name: "Samsung Galaxy S24",
    price: 899.99,
    discountPrice: undefined,
    rating: 4.6,
    reviewCount: 156,
    images: ["/products/galaxy-s24.jpg"],
    category: { name: "Smartphones" }
  }
]

const fallbackCategories = [
  {
    id: "1",
    name: "Smartphones",
    slug: "smartphones",
    description: "Latest mobile devices",
    imageUrl: "/categories/smartphones.jpg"
  },
  {
    id: "2",
    name: "Laptops",
    slug: "laptops",
    description: "High-performance computers",
    imageUrl: "/categories/laptops.jpg"
  },
  {
    id: "3",
    name: "Audio",
    slug: "audio",
    description: "Headphones and speakers",
    imageUrl: "/categories/audio.jpg"
  },
  {
    id: "4",
    name: "Tablets",
    slug: "tablets",
    description: "Portable tablets",
    imageUrl: "/categories/tablets.jpg"
  },
  {
    id: "5",
    name: "Accessories",
    slug: "accessories",
    description: "Phone and computer accessories",
    imageUrl: "/categories/accessories.jpg"
  },
  {
    id: "6",
    name: "Gaming",
    slug: "gaming",
    description: "Gaming consoles and accessories",
    imageUrl: "/categories/gaming.jpg"
  }
]

export default async function Home() {
  let featuredProducts = fallbackProducts
  let categories = fallbackCategories

  try {
    // Try to fetch from database if available
    const { prisma } = await import("@/lib/prisma")
    if (prisma) {
      const dbProducts = await prisma.product.findMany({
        where: { isFeatured: true, isActive: true },
        include: { category: true },
        take: 8,
        orderBy: { createdAt: "desc" }
      })
      
      if (dbProducts.length > 0) {
        featuredProducts = dbProducts.map((product: any) => ({
          ...product,
          price: parseFloat(product.price.toString()),
          discountPrice: product.discountPrice ? parseFloat(product.discountPrice.toString()) : undefined,
          rating: parseFloat(product.rating.toString()),
          images: product.images || [product.imageUrl || "/placeholder-product.jpg"],
          reviewCount: product.reviewCount || 0
        }))
      }

      const dbCategories = await prisma.category.findMany({
        where: { isFeatured: true },
        take: 6,
        orderBy: { name: "asc" }
      })
      
      if (dbCategories.length > 0) {
        categories = dbCategories.map((category: any) => ({
          ...category,
          id: category.id.toString(),
          slug: category.slug || category.name.toLowerCase().replace(/\s+/g, ""),
          imageUrl: category.imageUrl || undefined
        }))
      }
    }
  } catch (error) {
    // Database not available, use fallback data
    console.log("Database not available, using fallback data")
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <Categories categories={categories} />
      <Newsletter />
    </div>
  )
}
