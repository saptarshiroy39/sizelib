"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/docs";
import { cn } from "@/lib/utils";

interface SidebarProps {
  onLinkClick?: () => void;
  className?: string;
}

export default function Sidebar({ onLinkClick, className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex flex-col bg-muted dark:bg-card border-r border-border h-full font-mono",
        className,
      )}
    >
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 scrollbar-thin">
        {navigationItems.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-2">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.items.map((item, itemIdx) => {
                const isActive = pathname === item.href;

                return (
                  <li key={itemIdx}>
                    <Link
                      href={item.href}
                      onClick={onLinkClick}
                      className={cn(
                        "group flex items-center px-2 py-1.5 text-sm transition-colors",
                        isActive
                          ? "text-foreground font-bold"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <span className="truncate">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
