import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mikaelkortbaoui.dev'),
  title: 'Mikaël Kortbaoui | Fintech Portfolio',
  description:
    'Portfolio of Mikaël Kortbaoui, a student and developer specializing in fintech, AI, and software engineering.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Mikaël Kortbaoui | Fintech Portfolio',
    description:
      'Portfolio of Mikaël Kortbaoui, a student and developer specializing in fintech, AI, and software engineering.',
    images: [
      {
        url: '/onesheetImageC.png',
        width: 1200,
        height: 630,
        alt: 'Mikaël Kortbaoui Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mikaël Kortbaoui | Fintech Portfolio',
    description:
      'Portfolio of Mikaël Kortbaoui, a student and developer specializing in fintech, AI, and software engineering.',
    images: ['/onesheetImageC.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-field text-ink`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EP3Y8B1S85" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EP3Y8B1S85');
          `}
        </Script>
        <Navigation />
        <div className="pt-14">{children}</div>
      </body>
    </html>
  );
}
