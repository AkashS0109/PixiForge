import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBm = IBM_Plex_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight:['400','500','600','700']
});


export const metadata: Metadata = {
  title: "PixiForge",
  description: "AI powered Image Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables:{colorPrimary:'#624cf5',  
      },
     
      
    }}>
    <html lang="en">
      <body
        className={cn("font-IBm antialiased",IBm.variable)}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
