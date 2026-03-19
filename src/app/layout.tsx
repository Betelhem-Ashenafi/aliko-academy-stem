import { Suspense } from "react";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import "../index.css";

export const metadata: Metadata = {
  title: "Lovable App",
  description: "Lovable Generated Project",
  openGraph: {
    title: "Lovable App",
    description: "Lovable Generated Project",
    type: "website",
    images: [{ url: "https://lovable.dev/opengraph-image-p98pqg.png" }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Suspense fallback={null}>
            {children}
          </Suspense>
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
