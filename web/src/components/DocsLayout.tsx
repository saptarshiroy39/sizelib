"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-muted dark:bg-card text-foreground font-mono">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex relative">
        <Sidebar className="hidden lg:flex lg:w-72 lg:flex-shrink-0 lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)]" />

        <div
          className={cn(
            "fixed top-14 bottom-0 left-0 right-0 z-30 flex lg:hidden transition-opacity duration-200 pointer-events-none",
            sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0",
          )}
        >
          <div
            className="absolute inset-0 bg-background/50"
            onClick={() => setSidebarOpen(false)}
          />

          <Sidebar
            onLinkClick={() => setSidebarOpen(false)}
            className={cn(
              "relative flex w-full max-w-xs flex-col bg-background border-r border-border transition-transform duration-200 ease-in-out transform h-full",
              sidebarOpen ? "translate-x-0" : "-translate-x-full",
            )}
          />
        </div>

        <main className="flex-1 min-w-0 max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
