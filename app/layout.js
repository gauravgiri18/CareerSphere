import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs"
import {dark} from "@clerk/themes"

const inter = Inter({subset: ["latin"] });

export const metadata = {
  title: "CareerSphere: AI Career Coach",
  description: "Evolve your career with the help of AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance = {{
      baseTheme: "dark"
    }}>
    <html  lang="en"suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

            {/* Header */}
            <Header />

            <main className="min-h-screen pt-16">{children}</main>
            
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>With Love ❤️ Gaurav</p>
              </div>
            </footer>
            
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
