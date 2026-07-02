import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Silim Café | Modern Coffee Spot & Study Workspace",
  description: "A premium, minimalist café and study spot for students, developers, and local coffee enthusiasts.",
  keywords: ["cafe", "coffee shop", "specialty coffee", "dusk", "study space", "minimalist cafe", "workspace", "Spanish Latte", "Matcha Latte"],
  openGraph: {
    title: "Silim Café | Modern Coffee Spot & Study Workspace",
    description: "A premium, minimalist café and study spot for students, developers, and local coffee enthusiasts.",
    url: "https://silimcafe.com",
    siteName: "Silim Café",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-black text-gray-100 min-h-screen flex flex-col antialiased selection:bg-white selection:text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
