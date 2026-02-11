import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Website Design and Development for High-Growth B2B | Amply",
  description:
    "We are experts in creating websites that resonate with and convert your ICP, build your brand, and scale on Webflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-[family-name:var(--font-manrope)] antialiased">
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
