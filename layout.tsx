import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers/SessionProvider";
import { Toaster } from "react-hot-toast";
import { LiveChatBot } from "@/components/chat/LiveChatBot";
import { AppDownloadPrompt } from "@/components/mobile/AppDownloadPrompt";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://employnation.in'),
  title: {
    default: "Employ Nation - India's Leading Job Portal | Find Jobs & Hire Talent",
    template: "%s | Employ Nation - Jobs in India"
  },
  description: "India's premier job portal connecting job seekers with employers. Find latest jobs in IT, Banking, Healthcare, Engineering, Sales & more. Post jobs & hire top talent across North India - Delhi, Punjab, Haryana, Rajasthan.",
  keywords: [
    "jobs in India", "job portal India", "employment opportunities", "career opportunities India",
    "job search India", "hire talent India", "recruitment India", "job board India",
    "jobs in Delhi", "jobs in Punjab", "jobs in Haryana", "jobs in Chandigarh", "jobs in Mohali",
    "IT jobs India", "engineering jobs", "banking jobs", "healthcare jobs", "sales jobs",
    "fresher jobs", "experienced professionals", "remote jobs India", "work from home jobs",
    "indeed alternative", "naukri alternative", "shine alternative", "monster jobs alternative",
    "employ nation", "employnation.in", "job vacancy", "latest jobs", "government jobs",
    "private jobs", "part time jobs", "full time jobs", "internships India"
  ],
  authors: [{ name: "Progressive Build Solutions", url: "https://www.britpunjabi.com" }],
  creator: "Progressive Build Solutions",
  publisher: "Employ Nation",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://employnation.in",
    title: "Employ Nation - India's Leading Job Portal | Find Jobs & Hire Talent",
    description: "Find latest jobs in India or hire top talent. Connect with opportunities in IT, Banking, Healthcare, Engineering across Delhi, Punjab, Haryana & more.",
    siteName: "Employ Nation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Employ Nation - Find Your Dream Job in India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Employ Nation - India's Leading Job Portal",
    description: "Find latest jobs in India or hire top talent. IT, Banking, Healthcare, Engineering jobs across North India.",
    images: ["/twitter-card.jpg"]
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
  alternates: {
    canonical: "https://employnation.in",
    languages: {
      "en-IN": "https://employnation.in",
      "hi-IN": "https://employnation.in/hi"
    }
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
          <LiveChatBot />
          <AppDownloadPrompt />
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
