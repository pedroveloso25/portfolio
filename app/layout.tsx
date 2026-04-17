import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Pedro Rebouças Veloso | Data Scientist",
  description: "Data Scientist focused on building things that matter. Machine Learning, NLP, and real-world impact.",
  keywords: ["Data Science", "Machine Learning", "Python", "NLP", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground bg-grid">
        {children}
      </body>
    </html>
  );
}
