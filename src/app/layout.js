import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "./components/ui/provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dispatch University",
  description:
    "A wiki for speculative meta-biology for the game Dispatch. By fans for fans.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Provider>
          <Navbar />
          <main
            style={{
              flex: 1,
              maxWidth: "80rem",
              width: "100%",
              marginInline: "auto",
              padding: "1.5rem",
            }}
          >
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
