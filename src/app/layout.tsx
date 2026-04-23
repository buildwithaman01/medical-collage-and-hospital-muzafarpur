import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "BDMCH Transformation Strategy | Pehchanly Digital Identity Expert",
  description: "The comprehensive 24-month digital overhaul and growth strategy for Blue Diamond Medical College & Hospital, Muzaffarpur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} dark`}>
      <body suppressHydrationWarning className="antialiased bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
