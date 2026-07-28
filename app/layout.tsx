import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masudranahimel.com"),

  title: {
    default: "Masud Rana Himel | Software Engineer",
    template: "%s | Masud Rana Himel",
  },

  description:
    "Portfolio of Masud Rana Himel, an aspiring Software Engineer focused on modern web development, clean engineering and high-performance digital experiences.",

  authors: [
    {
      name: "Masud Rana Himel",
    },
  ],

  creator: "Masud Rana Himel",

  keywords: [
    "Masud Rana Himel",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Bangladesh",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://masudranahimel.com",
    siteName: "Masud Rana Himel",
    title: "Masud Rana Himel | Software Engineer",
    description:
      "Portfolio of Masud Rana Himel, focused on modern web development, clean engineering and high-performance digital experiences.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Masud Rana Himel | Software Engineer",
    description:
      "Portfolio of Masud Rana Himel, focused on modern web development and software engineering.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
