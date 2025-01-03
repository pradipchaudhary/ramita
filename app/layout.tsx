import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Metadata for the site
export const metadata: Metadata = {
    title: "Ramita Beauty Parlor",
    description:
        "Welcome to Ramita Beauty Parlor. Explore our beauty services and book your appointment today.",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "Ramita Beauty Parlor | Home",
        description:
            "Welcome to Ramita Beauty Parlor. Explore our beauty services and book your appointment today.",
        url: "https://yourwebsite.com",
        images: [
            {
                url: "https://yourwebsite.com/hero-bg.jpg",
                width: 1200,
                height: 630,
                alt: "Ramita Beauty Parlor",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ramita Beauty Parlor | Home",
        description:
            "Welcome to Ramita Beauty Parlor. Explore our beauty services and book your appointment today.",
        images: ["https://yourwebsite.com/hero-bg.jpg"],
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
