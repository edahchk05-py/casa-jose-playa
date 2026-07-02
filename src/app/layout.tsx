import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { SkipLink } from "@/components/layout/SkipLink";
import { PageTransition } from "@/components/layout/PageTransition";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { siteConfig } from "@/lib/site-config";
import { dictionaries, defaultLocale } from "@/lib/i18n/dictionary";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const t = dictionaries[defaultLocale];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: t.home.meta.description,
  openGraph: {
    title: siteConfig.name,
    description: t.home.meta.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/images/hero-paella-table.jpg", width: 1200, height: 800 }],
    locale: siteConfig.locale,
    alternateLocale: [siteConfig.alternateLocale],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: t.home.meta.description,
    images: ["/images/hero-paella-table.jpg"],
  },
  icons: {
    icon: "/images/logo-mark.jpg",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  image: `${siteConfig.url}/images/hero-paella-table.jpg`,
  servesCuisine: ["Mediterranean", "Seafood", "Spanish"],
  priceRange: "MAD 40 – MAD 550",
  telephone: siteConfig.contact.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.area,
    addressRegion: siteConfig.address.city,
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.address.lat,
    longitude: siteConfig.address.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "12:00",
    closes: "02:00",
  },
  url: siteConfig.url,
  sameAs: [siteConfig.social.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} className={`${cormorant.variable} ${instrument.variable}`}>
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <LanguageProvider>
          <SkipLink />
          <SmoothScroll>
            <Header />
            <main id="main-content" className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
