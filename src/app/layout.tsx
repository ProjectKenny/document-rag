import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Document-RAG | AI-Powered Document Intelligence Platform",
  description: "Transform your documents into intelligent, searchable knowledge bases with our advanced RAG (Retrieval-Augmented Generation) technology. Upload, analyze, and query your documents with AI precision.",
  keywords: ["Document RAG", "AI", "Document Intelligence", "Knowledge Base", "Document Search", "AI Assistant"],
  authors: [{ name: "Document-RAG Team" }],
  creator: "Document-RAG",
  publisher: "Document-RAG",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://document-rag.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Document-RAG | AI-Powered Document Intelligence Platform",
    description: "Transform your documents into intelligent, searchable knowledge bases with our advanced RAG technology.",
    url: "https://document-rag.vercel.app",
    siteName: "Document-RAG",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Document-RAG Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Document-RAG | AI-Powered Document Intelligence Platform",
    description: "Transform your documents into intelligent, searchable knowledge bases with our advanced RAG technology.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#0ea5e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />

          {/* Main Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
