
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar.js";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Telegram Bot",
  description: "Telegram Bot:v",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
