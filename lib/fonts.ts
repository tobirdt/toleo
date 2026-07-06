import { Fraunces, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/* Editorial display voice for headlines and the founder quote —
   pairs with the handwritten logo signature. */
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
});
