import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dylan's Mobile Shine | Premium Car Care",
  description:
    "Dylan's Mobile Shine offers professional car detailing and restoration services in Florida. We bring the shine back to your ride!",
  keywords:
    "mobile detailing, car detailing, Florida car detailing, professional car wash",
  openGraph: {
    title: "Dylan's Mobile Shine | Premium Car Care",
    description:
      "Professional mobile detailing services in Florida. Restore your car's shine today!",
    type: "website",
    url: "https://yourwebsite.com", // TODO: Put your website URL here
    images: ["/car-detailing.jpg"], // TODO: images here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
