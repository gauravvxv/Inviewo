import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Inviewo",
   description: 'Book sessions and learn with Inviewo.',
};

export default function RootLayout({ children }) {
  return (
   <html lang="en">
       <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      
      <meta property="og:title" content="Inviewo" />
      <meta property="og:url" content="https://inviewo.com" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph Image */}
      <meta property="og:image" content="https://inviewo.com/logo.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Structured data for Organization logo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Inviewo",
            "url": "https://inviewo.com",
            "logo": "https://inviewo.com/logo.png"
          }
          `,
        }}
      />
    </Head>
      <body>{children}</body>
    </html>
  );
}
