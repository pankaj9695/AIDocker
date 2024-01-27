import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ai Docker",
  description: "Empowering Enterprises to Build decentralized AImodels.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
