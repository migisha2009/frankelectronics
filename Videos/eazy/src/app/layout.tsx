import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/providers/SessionProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Frank Electronics - Electronics Store Rwanda",
  description: "Premium electronics store in Kigali, Rwanda. Shop smartphones, laptops, tablets and more.",
  icons: {
    icon: [
      { url: "/frank-electronics-logo.png", sizes: "any" },
      { url: "/frank-electronics-logo.png", sizes: "32x32" },
      { url: "/frank-electronics-logo.png", sizes: "16x16" },
    ],
    apple: [
      { url: "/frank-electronics-logo.png", sizes: "180x180" },
    ],
    shortcut: "/frank-electronics-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="icon" href="/frank-electronics-logo.png" />
        <link rel="shortcut icon" href="/frank-electronics-logo.png" />
        <link rel="apple-touch-icon" href="/frank-electronics-logo.png" />
      </head>
      <body className="min-h-screen bg-gray-50">
        <SessionProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
