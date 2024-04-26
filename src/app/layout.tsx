import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chatbot from "./components/Chatbot";
import Providers from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: 'TBR',
  description: 'Your to be read books collection',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>
        <Chatbot />
        {children}
      </body>
      </Providers>
    </html>
  );
}
