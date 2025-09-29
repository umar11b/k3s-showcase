import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Production Kubernetes Homelab - Umar Zaman",
  description:
    "Enterprise-grade Kubernetes infrastructure on Raspberry Pi 5 featuring advanced monitoring, auto-scaling, security hardening, and DevOps automation with 16% memory optimization.",
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
