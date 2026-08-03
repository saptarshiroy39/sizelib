"use client";

import Link from "next/link";
import Image from "next/image";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Search from "@/components/Search";

interface NavbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Navbar({ sidebarOpen, setSidebarOpen }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-muted dark:bg-card text-card-foreground font-mono">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden flex items-center justify-center h-[34px] w-[34px] text-foreground hover:bg-accent/40 rounded-none focus:outline-none select-none transition-none"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            {sidebarOpen ? (
              <IconX className="h-6 w-6" />
            ) : (
              <IconMenu2 className="h-6 w-6" />
            )}
          </button>

          <Link
            href="/introduction"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <Image
              src="/logo.png"
              alt="Sizelib Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="font-mono text-xl font-bold leading-none">
              SIZELIB
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-sm">
          <Search />
          <AnimatedThemeToggler
            id="nav-theme-toggle"
            title="Toggle Theme"
            className="p-1 border rounded-full bg-accent hover:bg-accent/70 cursor-pointer flex items-center justify-center"
          />
        </div>
      </div>
    </header>
  );
}
