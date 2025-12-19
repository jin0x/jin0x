import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "John Leskas | The Architect",
  description:
    "Interactive terminal experience — 20+ years of software engineering, AI leadership, and digital transformation. Chief AI Officer at Wynter. Founder of RSH.",
  keywords: [
    "John Leskas",
    "Software Engineer",
    "AI Engineer",
    "Chief AI Officer",
    "RSH",
    "Wynter",
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "AI",
    "Machine Learning",
  ],
  authors: [{ name: "John Leskas", url: "https://rsh.studio" }],
  creator: "John Leskas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leskas.dev",
    title: "John Leskas | The Architect",
    description:
      "Interactive terminal experience — 20+ years of software engineering, AI leadership, and digital transformation.",
    siteName: "John Leskas",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Leskas | The Architect",
    description:
      "Interactive terminal experience — 20+ years of software engineering, AI leadership, and digital transformation.",
    creator: "@john_leskas",
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
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
