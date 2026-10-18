import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { site } from "@/data/site";
import { siteUrl } from "@/data/seo";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: site.shortName,
  alternateName: [
    site.chapterName,
    `${site.school} DECA`,
    "Sycamore DECA Ohio",
  ],
  url: siteUrl,
  image: `${siteUrl}/images/icdc-winners.jpg`,
  description:
    "Great Oaks Sycamore DECA is the DECA chapter at Sycamore High School in Cincinnati, Ohio, preparing emerging leaders and entrepreneurs in marketing, finance, hospitality, and management.",
  location: {
    "@type": "Place",
    name: "Sycamore High School, Cincinnati, Ohio",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    addressCountry: "US",
  },
  memberOf: {
    "@type": "Organization",
    "@id": "https://www.ohiodeca.org/#organization",
    name: "Ohio DECA",
    url: "https://www.ohiodeca.org/",
  },
  sameAs: site.socials.map((s) => s.url),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: site.shortName,
  alternateName: site.chapterName,
  inLanguage: "en-US",
  publisher: { "@id": `${siteUrl}/#organization` },
};

const sans = localFont({
  src: [
    { path: "./fonts/source-sans-pro-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/source-sans-pro-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/source-sans-pro-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/source-sans-pro-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/source-sans-pro-600-italic.woff2", weight: "600", style: "italic" },
    { path: "./fonts/source-sans-pro-700-italic.woff2", weight: "700", style: "italic" },
  ],
  display: "swap",
  variable: "--font-source-sans-pro",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sycamore DECA | Sycamore High School, Cincinnati",
    template: "%s | Sycamore DECA",
  },
  description:
    "Great Oaks Sycamore DECA is the DECA chapter at Sycamore High School in Cincinnati, Ohio. Chapter info, event calendar, competition prep, and practice tests for members and future members.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.shortName,
    title: site.shortName,
    description:
      "The DECA chapter at Sycamore High School in Cincinnati, Ohio — chapter info, event calendar, competition prep, and practice tests.",
  },
  twitter: {
    card: "summary_large_image",
    title: site.shortName,
    description:
      "The DECA chapter at Sycamore High School in Cincinnati, Ohio — chapter info, event calendar, competition prep, and practice tests.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
