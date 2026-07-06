import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hemantpatidar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hemant Patidar | Java Full Stack Developer",
    template: "%s | Hemant Patidar",
  },
  description:
    "Java Full Stack Developer specializing in Spring Boot, React.js, JWT authentication, and REST APIs. MCA candidate with LLM post-training experience at Ethara AI.",
  keywords: [
    "Hemant Patidar",
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "React Developer",
    "Software Engineer",
    "LLM Engineer",
    "Backend Engineer",
    "Full Stack Web Developer",
    "Indore",
    "India",
  ],
  authors: [{ name: "Hemant Patidar", url: siteUrl }],
  creator: "Hemant Patidar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Hemant Patidar Portfolio",
    title: "Hemant Patidar | Java Full Stack Developer",
    description:
      "Java Full Stack Developer specializing in Spring Boot, React.js, and enterprise applications. LLM Post-Training experience at Ethara AI.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Hemant Patidar - Java Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemant Patidar | Java Full Stack Developer",
    description:
      "Java Full Stack Developer specializing in Spring Boot, React.js, and enterprise applications.",
    images: ["/og-image.svg"],
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
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hemant Patidar",
  url: siteUrl,
  jobTitle: "Java Full Stack Developer",
  email: "hemant95756092@gmail.com",
  telephone: "+91-9575609213",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/Hemantpatidar01",
    "https://linkedin.com/in/hemant-patidar-921193235",
  ],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "React.js",
    "MySQL",
    "REST APIs",
    "JWT Authentication",
    "LLM Evaluation",
    "Instruction Tuning",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "DAVV – School of Computer Science & IT, Indore",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#050816] font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
