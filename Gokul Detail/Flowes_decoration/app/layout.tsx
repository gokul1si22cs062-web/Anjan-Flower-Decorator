import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sree Anjan Flower Decorator | Premium Floral Decorations in Tumkur',
  description:
    'Sree Anjan Flower Decorator crafts breathtaking wedding mandaps, event stages, and floral arrangements in Tumkur. Transform every occasion into an unforgettable memory.',
  keywords: [
    'flower decorator Tumkur',
    'wedding decoration',
    'floral mandap',
    'Sree Anjan flowers',
    'event decoration',
    'Indian wedding decor',
    'Anjan flower decorators',
  ],
  openGraph: {
    title: 'Sree Anjan Flower Decorator',
    description: 'Premium floral decorations for weddings & events in Tumkur.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sree Anjan Flower Decorator',
    description: 'Premium floral decorations for weddings & events in Tumkur.',
  },
}

export const viewport: Viewport = {
  themeColor: '#f9c8d8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
        <head>
          <meta name="google-site-verification" content="_umnpK8a5MLIrezjqJB6hR9Mjc6XciqDBGAuFWfQbIs" /><meta name="google-site-verification" content="abc123xyz" />
        </head>
        <body className="antialiased" style={{ fontFamily: 'var(--font-lato), Arial, sans-serif' }}>
          {children}
          <Analytics />
        </body>
      </html>
  )
}
