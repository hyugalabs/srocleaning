import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

// Brandon Grotesque is a licensed face; Jost is the closest open geometric
// stand-in. If the brand font is installed via Adobe Fonts it wins the stack.
const display = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarah Ross Office Cleaning, LLC | Girard, Ohio",
  description:
    "Owner-operated commercial cleaning for Trumbull and Mahoning counties. 25+ years. Call or text (330) 880-8254 for a free quote.",
};

export const viewport: Viewport = {
  themeColor: "#323dff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable}>
      <body>{children}</body>
    </html>
  );
}
