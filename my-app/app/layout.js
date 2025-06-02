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
  metadataBase: new URL("https://inviewo.com"),
  keywords: [
    "Inviewo",
    "online learning",
    "book expert sessions",
    "learning platform",
    "live sessions",
    "education",
    "mentorship"
  ],
  authors: [{ name: "Inviewo", url: "https://inviewo.com" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Inviewo – Expert Learning & Booking Platform",
    description: "Inviewo offers expert-led live sessions and courses. Book your first session today and enhance your skills.",
    url: "https://inviewo.com",
    siteName: "Inviewo",
    images: [
      {
        url: "https://inviewo.com/logo.png",
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
    images: ["https://inviewo.com/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Basic Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Inviewo – Expert Learning & Booking Platform" />
        <meta property="og:description" content="Inviewo offers expert-led live sessions and courses. Book your first session today and enhance your skills." />
        <meta property="og:url" content="https://inviewo.com" />
        <meta property="og:image" content="https://inviewo.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Inviewo" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inviewo – Expert Learning & Booking Platform" />
        <meta name="twitter:description" content="Inviewo offers expert-led live sessions and courses. Book your first session today and enhance your skills." />
        <meta name="twitter:image" content="https://inviewo.com/logo.png" />

        {/* Structured Data for Logo (Google Rich Results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Inviewo",
              url: "https://inviewo.com",
              logo: "https://inviewo.com/logo.png",
            }),
          }}
        />
      </head>
      <body className="bg-[#f0f8ff] text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
