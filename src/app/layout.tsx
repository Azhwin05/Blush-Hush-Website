import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { CustomCursor } from "@/components/ui/custom-cursor";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

const fraunces = Fraunces({
    subsets: ["latin"],
    variable: "--font-fraunces",
    display: "swap",
    axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
    title: "BH Interiors & Healthcare Design | Premium Architecture & Planning",
    description: "Award-winning interior design and healthcare infrastructure planning firm in South India. Specializing in residential luxury and NABH-compliant hospital design.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn(
                "min-h-screen bg-ivory font-sans antialiased pb-24 md:pb-0", // Added bottom padding for mobile nav
                manrope.variable,
                fraunces.variable
            )}>
                {children}
                <CustomCursor />
                <MobileBottomNav />
            </body>
        </html>
    );
}
