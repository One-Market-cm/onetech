import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "One Tech - Tech and Development Arm of One Market",
    template: "%s | One Tech",
  },
  description: "One Tech is the technology and development arm of One Market, delivering cutting-edge software solutions, training, and digital transformation services across Africa.",
  keywords: ["One Tech", "One Market", "Software Development", "Technology", "Training", "Digital Transformation", "Africa"],
  authors: [{ name: "One Tech" }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onetech.vercel.app",
    siteName: "One Tech",
    title: "One Tech - Tech and Development Arm of One Market",
    description: "Delivering cutting-edge software solutions and digital transformation services across Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "One Tech - Tech and Development Arm of One Market",
    description: "Delivering cutting-edge software solutions and digital transformation services across Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
