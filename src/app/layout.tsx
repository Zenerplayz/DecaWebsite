import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { site } from "@/data/site";
import { siteUrl } from "@/data/seo";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.chapterName,
  alternateName: [
    site.shortName,
    `${site.school} DECA`,
    "Sycamore DECA Ohio",
  ],
  url: siteUrl,
  image: `${siteUrl}/images/icdc-winners.jpg`,
  description:
    "Great Sycamore DECA is the DECA chapter at Sycamore High School in Cincinnati, Ohio, preparing emerging leaders and entrepreneurs in marketing, finance, hospitality, and management.",
  foundingLocation: {
    "@type": "Place",
    name: "Sycamore High School, Cincinnati, Ohio",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    addressCountry: "US",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Ohio DECA",
  },
  sameAs: site.socials.map((s) => s.url),
};

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Great Sycamore DECA — Lead. Compete. Serve.",
    template: "%s · Great Sycamore DECA",
  },
  description:
    "Great Sycamore DECA is the DECA chapter at Sycamore High School in Cincinnati, Ohio. Chapter info, event calendar, competition prep, and practice tests for members and future members.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Great Sycamore DECA",
    title: "Great Sycamore DECA — Lead. Compete. Serve.",
    description:
      "The DECA chapter at Sycamore High School in Cincinnati, Ohio — chapter info, event calendar, competition prep, and practice tests.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Sycamore DECA — Lead. Compete. Serve.",
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
    <html lang="en" className={`scroll-smooth ${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
