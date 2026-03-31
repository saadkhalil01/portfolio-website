import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Muhammad Saad - React Native Developer",
  description: "Portfolio of Muhammad Saad - React Native Developer with 2.5+ years experience building high-performance cross-platform apps.",
  keywords: [
    "Muhammad Saad",
    "Saad Khalil",
    "React Native Developer",
    "Mobile App Developer",
    "iOS Developer",
    "Android Developer",
    "Expo Expert",
    "Freelance Developer",
    "Next.js Portfolio",
    "Startup Developer",
    "Cross-platform Apps",
    "Stripe Integration",
    "Firebase",
    "Node.js",
    "MongoDB"
  ],
  authors: [{ name: "Muhammad Saad", url: "https://saadkhalil.dev" }],
  creator: "Muhammad Saad",
  publisher: "Muhammad Saad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://saadkhalil.dev",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    other: [
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  openGraph: {
    title: "Muhammad Saad - React Native Developer",
    description: "Portfolio of Muhammad Saad - React Native Developer with 2.5+ years experience building high-performance cross-platform apps.",
    url: "https://saadkhalil.dev",
    siteName: "Saad Khalil Portfolio",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Saad Khalil - React Native Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Saad - React Native Developer",
    description: "Portfolio of Muhammad Saad - React Native Developer with 2.5+ years experience building high-performance cross-platform apps.",
    images: ["/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f5f5dc" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Saad",
              "url": "https://saadkhalil.dev",
              "image": "https://saadkhalil.dev/android-chrome-512x512.png",
              "sameAs": [
                "https://github.com/saadkhalil01",
                "https://www.linkedin.com/in/saad-khalil-0912b2232/"
              ],
              "jobTitle": "React Native Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": "Portfolio of Muhammad Saad - React Native Developer with 2.5+ years experience building high-performance cross-platform apps."
            })
          }}
        />
      </head>
      <body className="antialiased">
        <div className="mesh-background" />
        {children}
      </body>
    </html>
  );
}

