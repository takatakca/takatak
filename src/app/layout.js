import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { AppProvider } from "./context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Takatak website",
  description: "This is takatak official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Performance optimizations for Upmind */}
        <link rel="preconnect" href="https://embed.upmind.app" />
        <link rel="dns-prefetch" href="https://embed.upmind.app" />
      </head>
      <body
        className={`bg-gradient-to-b from-blue-900 to-blue-700 min-h-screen text-white hicontainer ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
        <div className="container">
          <div>
            <Navbar />
            {children}
          </div>
          <Footer />
        </div>
        </AppProvider>
      </body>
    </html>
  );
}
