// app/layout.tsx
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Inviewo – Expert Learning & Booking Platform",
  description: "Inviewo offers expert-led live sessions and courses. Book your first session today and enhance your skills.",
  metadataBase: new URL("https://www.inviewo.com"),
  keywords: [
    "Inviewo",
    "online learning",
    "book expert sessions",
    "learning platform",
    "live sessions",
    "education",
    "mentorship"
  ],
  authors: [{ name: "Inviewo", url: "https://www.inviewo.com" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Inviewo – Expert Learning & Booking Platform",
    description: "Inviewo offers expert-led live sessions and courses. Book your first session today and enhance your skills.",
    url: "https://www.inviewo.com",
    siteName: "Inviewo",
    images: [
      {
        url: "/logo.png", // relative path from /public
        width: 1200,
        height: 630,
        alt: "Inviewo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inviewo – Expert Learning & Booking Platform",
    description: "Inviewo offers expert-led live sessions and courses. Book your first session today and enhance your skills.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#f0f8ff] text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
