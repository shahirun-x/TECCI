import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teccipark.com"),
  title: {
    default: "TECCI Park — Chennai's Premier LEED Silver Certified Grade A IT Park on OMR",
    template: "%s | TECCI Park",
  },
  description:
    "TECCI Park is Chennai's premier LEED Silver certified Grade A IT Park spanning 10 lakh sq.ft on OMR (Rajiv Gandhi Salai), Sholinganallur. Developed by Buhari Group with 6.5 lakh sq.ft of leasable premium office space across two flagship blocks. Home to Vestas, Savista, Cactus Coworking, and other leading enterprises.",
  keywords: [
    "IT park Chennai",
    "Grade A office space OMR",
    "LEED certified IT park Chennai",
    "office space for lease Sholinganallur",
    "commercial real estate OMR",
    "TECCI Park",
    "Buhari Group IT park",
    "Rajiv Gandhi Salai office space",
    "green building Chennai",
    "premium office space OMR corridor",
    "Chennai IT park for lease",
    "Sholinganallur commercial space",
  ],
  authors: [{ name: "TECCI Park" }],
  creator: "Buhari Group",
  publisher: "TECCI Park",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.teccipark.com",
    siteName: "TECCI Park",
    title: "TECCI Park — Chennai's Premier LEED Silver Certified Grade A IT Park",
    description:
      "Chennai's only LEED Silver certified Grade A IT Park available for lease on OMR. 10 lakh sq.ft development with 6.5 lakh sq.ft premium leasable office space.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TECCI Park — Grade A IT Park in Chennai's OMR corridor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TECCI Park — Chennai's Premier LEED Silver Certified IT Park",
    description:
      "Grade A IT Park on OMR, Chennai. LEED Silver certified. 6.5 lakh sq.ft leasable office space.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.teccipark.com",
  },
  category: "Commercial Real Estate",
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "12.91018;80.228475",
    ICBM: "12.91018, 80.228475",
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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-navy">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
