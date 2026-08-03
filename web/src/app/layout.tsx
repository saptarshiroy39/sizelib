import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClickSpark from "@/components/ui/click-spark";
import Figlet from "@/components/Figlet";

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sizelib.hirishi.in"),
  title: "Sizelib",
  description:
    "A simple, pythonic library for working with and humanizing file sizes",
  applicationName: "Sizelib",
  keywords: [
    "Sizelib",
    "sizelib.hirishi.in",
    "https://sizelib.hirishi.in",
    "Python Library",
    "File Size",
    "Humanize",
    "Bytes Utility",
    "Python",
    "PyPI",
    "Python Package",
    "Python Package Index",
    "Saptarshi Roy",
    "saptarshiroy39",
    "hirishi",
    "hirishi.in",
    "https://hirishi.in",
  ],
  robots: "index, follow",
  creator: "Saptarshi Roy",
  authors: [{ name: "Saptarshi Roy", url: "https://hirishi.in" }],

  openGraph: {
    title: "Sizelib",
    description:
      "A simple, pythonic library for working with and humanizing file sizes",
    url: "https://sizelib.hirishi.in",
    siteName: "Sizelib",
    images: [
      {
        url: "https://sizelib.hirishi.in/OG.png",
        width: 1200,
        height: 630,
        alt: "Sizelib",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sizelib",
    description:
      "A simple, pythonic library for working with and humanizing file sizes",
    images: ["https://sizelib.hirishi.in/OG.png"],
    site: "@saptarshiroy39",
    creator: "@saptarshiroy39",
  },

  icons: {
    icon: "/sizelib.svg",
    shortcut: "/sizelib.svg",
    apple: "/sizelib.svg",
  },

  alternates: {
    canonical: "https://sizelib.hirishi.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${mono.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClickSpark
            sparkColor="var(--spark-color)"
            className="relative min-h-screen w-full flex flex-col"
          >
            <Figlet />
            {children}
          </ClickSpark>
        </ThemeProvider>
      </body>
    </html>
  );
}
