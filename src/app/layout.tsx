import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "k3s Homelab Showcase - Umar Zaman",
  description:
    "Documenting my journey learning Kubernetes on Raspberry Pi with video demonstrations and detailed technical documentation for each lab exercise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
