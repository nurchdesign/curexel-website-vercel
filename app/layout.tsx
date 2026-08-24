import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curexel",
  description: "Curexel Technologies Pvt Ltd - Pioneering painless injections",
  metadataBase: new URL("https://www.curexel.com"),
  openGraph: {
    title: "Curexel",
    description:
      "Curexel Technologies Pvt Ltd - Pioneering painless injections",
    url: "https://www.curexel.com",
    siteName: "Curexel",
    type: "website",
    images: [
      {
        url: "/figma/updated/asset-02.png",
        width: 512,
        height: 512,
        alt: "Curexel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curexel",
    description:
      "Curexel Technologies Pvt Ltd - Pioneering painless injections",
    images: ["/figma/updated/asset-02.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.curexel.com",
  },
  icons: {
    icon: "/figma/updated/asset-02.png",
    apple: "/figma/updated/asset-02.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
