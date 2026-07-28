import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teccipark.com"),
  title: "TECCI Park — Chennai's Premier LEED Silver Certified IT Park | OMR",
  description:
    "Grade A IT park on Rajiv Gandhi Salai (OMR), Chennai. LEED Silver certified green building with 6,50,000 sq.ft. of premium office space. Developed by ECCI, Buhari Group.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "TECCI Park — Chennai's Premier LEED Silver Certified IT Park | OMR",
    description:
      "Grade A IT park on Rajiv Gandhi Salai (OMR), Chennai. LEED Silver certified green building with 6,50,000 sq.ft. of premium office space. Developed by ECCI, Buhari Group.",
    url: "https://www.teccipark.com",
    siteName: "TECCI Park",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TECCI Park — Chennai's Premier LEED Silver Certified IT Park | OMR",
    description:
      "Grade A IT park on Rajiv Gandhi Salai (OMR), Chennai. LEED Silver certified green building with 6,50,000 sq.ft. of premium office space. Developed by ECCI, Buhari Group.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
